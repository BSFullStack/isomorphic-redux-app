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
        return (
            <article className="clearfix widget-answers__item" id="a-1020000004308865">
                <div className="post-col">
                    <VoteWidget likeText="赞一个！回答非常棒！" hateText="差评！答得太差了！"/>
                </div>
                <div className="post-offset ">
                    {/*头像组件*/}
                    <AvatorWidget />
                    <strong>
                        <a href="/u/vicky01200059" className="mr5">
                            Vicky
                        </a>
                    </strong>
                    <FromNow time={new Date()} type="1"/>
                    <div className="answer fmt mt10">
                        <p>我见过有文章推荐使用try{}catch{}来进行业务逻辑处理，理由是Java的异常机制是由JVM控制的，而且将异常统一抛到最上层由一个统一的控制器进行管理，比如Spring，这样可以很好的对异常进行管理，等等理由。<br />个人觉得异常就是异常，不可与正常的业务逻辑混到一起，异常是错误的场景，不然也不会叫做异常，既然是错误，那么我们要做的应该是尽量去避免，但是也不能卡的太死，比如DAO层就不去捕获异常，而由Service层进行捕获等。</p>
                    </div>
                    <OperationWidget />
                </div>
            </article>
        );
    }
}
