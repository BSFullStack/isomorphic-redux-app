import React, { Component, PropTypes } from 'react';
import VoteWidget from './widgets/Vote';
import TagList from './TagList';
import OperationWidget from './widgets/Operation';
/**
 *问题详情
 */
export default class Question extends Component {
    render(){
        return (
            <article className="widget-question__item">
                <div className="post-col">
                    <VoteWidget />
                </div>
                <div className="post-offset">
                    <div className="question fmt">
                        <p>
                           我怎么写一个程序自动判断,别人的服务器变慢,他们有两个接口地址,位于两台不同的服务器,那么,我怎么用程序自动判断一个服务器变慢了,自动切换到下一个服务器中请求链接呢???我使用php写的程序
                        </p>
                    </div>
                    {/*标签组件*/}
                    <TagList className="mb20" tags={[{},{}]}/>
                    <OperationWidget />
                </div>
            </article>
        );
    }
}
