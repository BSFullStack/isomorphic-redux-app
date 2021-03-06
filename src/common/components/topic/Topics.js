import React , { Component } from 'react';
import Topic from './Topic';
import NoTopic from './NoTopic';
/**
 * 图书列表明细
 */
class Topics extends Component{

    render(){
        const { topics , isFetching } = this.props;
        let topicsComponent ;
        if( topics.length == 0 && isFetching){
            topicsComponent = (
                <p>正在加载...</p>
            );
        } else {
            topicsComponent = this._renderTopic(topics);
        }
        return (
            <div className="stream-list question-stream">
                {topicsComponent}
            </div>
        );
    }
    _renderTopic(topics){

        return topics.map((topic,index)=>{
            return (
                <Topic key={index} {...topic} viewDetail={::this.handlerViewDetail} />
            );
        });
    }
    handlerViewDetail(topicId){
        const { handlerClickTitle } = this.props;
        handlerClickTitle && handlerClickTitle(topicId);
    }
}

export default Topics;

