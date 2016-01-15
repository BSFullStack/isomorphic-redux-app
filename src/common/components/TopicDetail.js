/**
 * 问题详情页
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TopHeader from './ui/topicDetail/TopHeader';
import Question from './ui/topicDetail/Question';
import Header from './layout/Header';
import AnswersWidget from './ui/topicDetail/widgets/Answers'
import AnswersDetail from './ui/topicDetail/Answers'
class Topic extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        $('[data-toggle="tooltip"]').tipsy({
            gravity:function(){
                return this.getAttribute('data-placement');
            },
            title: function() {
                return this.getAttribute('data-original-title');
            }
         });
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handlerCategoryChange(nextCategory){

        this.props.selectCategory(nextCategory);


    }
}



export default Topic;
