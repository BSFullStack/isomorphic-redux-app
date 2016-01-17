/**
 * 问题详情页
 */
import React, { Component, PropTypes } from 'react';

import TopHeader from './ui/topicDetail/TopHeader';
import Question from './ui/topicDetail/Question';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AnswersWidget from './ui/topicDetail/widgets/Answers';
import AnswersDetail from './ui/topicDetail/Answers';

import Sidebar from './ui/sidebar/Sidebar';
import LoadingWidget from './ui/common/Loading';

class TopicDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /*const { selectedReddit } = this.props;
        this.props.fetchPostsIfNeeded(selectedReddit);*/

        const { params } = this.props;
        const { topicId } = params;
        //非法跳转，回到首页
        if(!topicId){
            this.props.history.push('/topics');
            return ;
        }
        this.props.fetchTopicDetailIfNeeded(topicId);
    }

    componentWillReceiveProps(nextProps) {

        const { data, error , isFetching,newAnswer } = nextProps;
        if( data && data.code == 404 && data.error){
            //数据异常
            this.props.history.push('/404');
            return ;
        }
        if(newAnswer){
            const {answers} = data;
            answers.push(newAnswer);
        }
        this.setState({
            data,
            error,
            isFetching
        },()=>{
            setTimeout(()=>{
                const { answerEditor } = this.refs;

                $('[data-toggle="tooltip"]').tipsy({
                    gravity:function(){
                        return this.getAttribute('data-placement');
                    },
                    title: function() {
                        return this.getAttribute('data-original-title');
                    }
                });
                if(answerEditor&& !this.hasRender ){

                    this.mdEditor = new Mditor(answerEditor,{
                        height:300,
                        fixedHeight:true
                    });
                    this.hasRender = true;
                }
            },0);

        });
    }

    render () {

        const { isFetching , data  , error } = this.props;
        let contentComponent ;
        if(isFetching || data== null || data.error){
            contentComponent = (
                <div className="wrap">
                    <LoadingWidget />
                 </div>
            );
        }else {

            const { answers } = data;
            contentComponent = (
                <div className="wrap">
                    <TopHeader {...data}/>
                    <div className="container mt30">
                        <div className="row">
                                    <div className="col-xs-12 col-md-9 main">
                                        <Question {...data} />
                                        {/*回答条目*/}
                                        <AnswersWidget count={answers.length}/>
                                        {
                                            answers.map(answer=>{
                                                return <AnswersDetail key={answer._id} answer={answer} {...data}/>;
                                            })
                                        }
                                        <h4>我来回答</h4>
                                        <br />
                                        <div className="editor-wrap">
                                             <div className="editor" id="questionText">
                                                    <textarea ref="answerEditor" name="text"
                                                        className="form-control" rows="4"
                                                                    placeholder="告诉ta答案..."></textarea>
                                            </div>
                                            <div id="answerSubmit" className="mt15 clearfix">
                                                <div className="pull-right">
                                                    <button type="button" onClick={::this.handlerAnswer} id="answerIt" data-id="1010000004308144"  className="btn btn-lg btn-primary ml20">
                                                        一键回答
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Sidebar />
                        </div>
                    </div>
                </div>

            );
        }
        return (
            <div>
                <Header />
                {contentComponent}

                <Footer />


            </div>
        );
    }
    handlerAnswer(){
        debugger;
        const  { id } = this.props.data;

        const answer = this.mdEditor.getValue();

        const currentUser = window.BSGlobeData.extraData.loginUser;

        this.props.sendAnswer(currentUser.id,id,answer);
        this.mdEditor.setValue("")
    }
}



export default TopicDetail;
