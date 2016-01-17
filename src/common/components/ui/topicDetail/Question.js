import React, { Component, PropTypes } from 'react';
import VoteWidget from './widgets/Vote';
import TagList from './TagList';
import OperationWidget from './widgets/Operation';
import _ from 'lodash';
/**
 *问题详情
 */
export default class Question extends Component {
    render(){
        const { title , content } = this.props;

        return (
            <article className="widget-question__item">
                <div className="post-col">
                    <VoteWidget likeText="好问题。我也想知道答案" hateText="骚年，这个问题不太好呦"/>
                </div>
                <div className="post-offset">
                    <div className="question fmt">
                        <div  dangerouslySetDefaultInnerHTML={{__html: content }}></div>
                    </div>
                    <OperationWidget />
                </div>
            </article>
        );
    }
}
