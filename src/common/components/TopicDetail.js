/**
 * 问题详情页
 */
import React, { Component, PropTypes } from 'react';

import mditor from 'mditor';
import TopHeader from './ui/topicDetail/TopHeader';
import Question from './ui/topicDetail/Question';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AnswersWidget from './ui/topicDetail/widgets/Answers';
import AnswersDetail from './ui/topicDetail/Answers';

import Sidebar from './ui/sidebar/Sidebar';

class Topic extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const { answerEditor } = this.refs;
        setTimeout(()=>{
            $('[data-toggle="tooltip"]').tipsy({
                gravity:function(){
                    return this.getAttribute('data-placement');
                },
                title: function() {
                    return this.getAttribute('data-original-title');
                }
            });
            new Mditor(answerEditor,{
                    height:300,
                    fixedHeight:true
            });
        },0);
    }

    componentWillReceiveProps(nextProps) {


    }

    render () {
        return (
            <div>
                <Header />
                <div className="wrap">
                    <TopHeader />
                    <div className="container mt30">
                        <div className="row">
                            <div className="col-xs-12 col-md-9 main">
                                <Question />
                                {/*回答条目*/}
                                <AnswersWidget />
                                <AnswersDetail />
                                <AnswersDetail />
                                <AnswersDetail />
                                <AnswersDetail />
                                <h4>我来回答</h4>
                                <div className="editor-wrap">
                                     <div className="editor" id="questionText">
                                            <textarea ref="answerEditor" name="text"
                                                className="form-control" rows="4"
                                                            placeholder="告诉ta答案..."></textarea>
                                    </div>
                                    <div id="answerSubmit" className="mt15 clearfix">
                                        <div className="pull-right">
                                            <button type="submit" id="answerIt" data-id="1010000004308144" className="btn btn-lg btn-primary ml20">
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
                <Footer />
               
            </div>
        );
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
