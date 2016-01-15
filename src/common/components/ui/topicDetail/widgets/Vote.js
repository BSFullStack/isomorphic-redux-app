import React, { Component, PropTypes } from 'react';

/**
 *问题详情-对问题投票的组件
 */
export default class VoteWidget extends Component {
    render(){
        const { likeText , hateText } = this.props;
        return (
            <div className="widget-vote">
                <button type="button" className="like"
                    data-id="1010000004305620" data-type="question" data-do="like"
                    data-toggle="tooltip" data-placement="s" title=""
                    data-original-title={likeText}>
                </button>
                <span className="count">0</span>
                <button type="button" className="hate" data-id="1010000004305620" data-type="question"
                    data-do="hate" data-toggle="tooltip" data-placement="n" title=""
                    data-original-title={hateText}>
                </button>
            </div>
        );
    }
}
