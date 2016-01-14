import React, { Component, PropTypes } from 'react';

export default class TopHeader extends Component {
    render(){
        return (
            <div className="post-topheader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ol className="breadcrumb">
                                <li>
                                    <a href="/questions/newest">
                                        问答
                                    </a>
                                </li>
                                <li className="active">
                                    问答详情
                                </li>
                            </ol>
                            <h1 className="h3 title" id="questionTitle" data-id="1010000004307161">
                                <a href="/q/1010000004307161">
                                    求推荐几个前端框架 ...
                                </a>
                            </h1>
                            <div className="author">
                                <a href="/u/gclove" className="mr5">
                                    <img className="avatar-24 mr10" src="http://sfault-avatar.b0.upaiyun.com/372/756/3727565787-551fd966d9593_big64" alt="gclove" />
                                    <strong>
                                        gclove
                                    </strong>
                                </a>
                                <strong className="text-black mr10">
                                    {' '}
                                </strong>
                                1 小时前 提问
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="widget-action--ver list-unstyled">
                                <li>
                                    <button type="button" id="sideFollow" className="btn btn-success btn-sm" data-id="1010000004307161" data-do="follow" data-type="question" data-toggle="tooltip" data-placement="right" title="" data-original-title="关注后将获得更新提醒">
                                        关注
                                    </button>
                                    <strong>8</strong> 关注
                                </li>
                                <li>
                                   <button type="button" id="sideBookmark" className="btn btn-default btn-sm" data-id="1010000004307161" data-type="question">
                                        收藏
                                    </button>
                                    <strong id="sideBookmarked">2</strong> 收藏，<strong className="no-stress">155</strong> 浏览
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
