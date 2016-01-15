import React, { Component, PropTypes } from 'react';

/**
 * 工具栏
 */
export default class Operation extends Component {
    render(){
        return (
            <div className="post-opt">
                <ul className="list-inline mb0">
                    <li>
                        <a href="/q/1010000004308144">链接</a>
                    </li>
                    <li data-toggle="tooltip" data-placement="top" title="" className="edit-btn" >
                        <a href="javascript:;">编辑</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" className="comments" data-id="1010000004308144" data-target="#comment-1010000004308144">
                            评论
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
