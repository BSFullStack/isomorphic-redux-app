import React, { Component, PropTypes } from 'react';
import VoteWidget from './widgets/Vote';
import AvatorWidget from './widgets/Avator';
import OperationWidget from './widgets/Operation';
import FromNow from '../common/FromNow';
/**
 * 回答详情
 */
export default class Answers extends Component {
    render(){

        const { answer } = this.props;
        const { content , star , accept , answerTime , updateTime } = answer ;
        return (

            <article className="clearfix widget-answers__item" id="a-1020000004308865">
                <div className="post-col">
                    <VoteWidget likeText="赞一个！回答非常棒！" hateText="差评！答得太差了！" star={star}/>
                </div>
                <div className="post-offset ">
                    {/*头像组件*/}
                    <AvatorWidget />
                    <strong>
                        <a href="javascript:;" className="mr5">
                            Vicky
                        </a>
                    </strong>
                    <FromNow time={answerTime}  type="1" />
                    <div className="answer fmt mt10">
                        <p>{ content }</p>
                    </div>
                    <OperationWidget />
                </div>
            </article>
        );
    }
}
