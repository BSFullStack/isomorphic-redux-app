import React, { Component, PropTypes } from 'react';

/**
 * 回答条目数量
 */
export default class Answers extends Component {
    render(){
        const { count } = this.props;
        return (
            <div className="widget-answers">
                <h2 className="title h4 mt30 mb20 post-title" id="answers-title">{count} 个回答</h2>
            </div>
        );
    }
}
