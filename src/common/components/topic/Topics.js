import React , { Component } from 'react';
import Topic from './Topic';
import NoTopic from './NoTopic';
/**
 * 图书列表明细
 */
class Topics extends Component{

    render(){
        const { topics } = this.props;
        return (
            <ul className="talk-list cl">
                { !topics && <NoTopic /> }
                { this._renderTopic() }
            </ul>
        );
    }
    _renderTopic(){
        const { topics  } = this.props;
        return topics.map((topic,index)=>{
            return (
                <Topic key={index} {...topic} />
            );
        });
    }
}

export default Topics;

