import React, { Component, PropTypes } from 'react';

/**
 *问题详情-对问题投票的组件
 */
export default class VoteWidget extends Component {
    render(){
        return (
            <div className="widget-vote">
                <button type="button" className="like" data-id="1010000004305620" data-type="question" data-do="like" data-toggle="tooltip" data-placement="s" title="" data-original-title="好问题。我也想知道答案"></button>
                <span className="count">0</span>
                <button type="button" className="hate" data-id="1010000004305620" data-type="question" data-do="hate" data-toggle="tooltip" data-placement="n" title="" data-original-title="很low的问题"></button>
            </div>
        );
    }
}
