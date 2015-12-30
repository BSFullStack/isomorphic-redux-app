import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="bg-white">
                <div className="wpn cl bg-white">
                        <a className="icon-uimini logo-hd" href="http://www.ui.cn/" title="UI中国"></a>
                        <ul className="nav-hd cl">
                            <li id="nav-index">
                                <a href="http://www.ui.cn/" className="">
                                    首页
                                </a>
                            </li>
                            <li id="nav-work">
                                <a href="http://www.ui.cn/list.html" target="_self" className="">
                                    话题
                                </a>
                            </li>
                            <li id="nav-exp">
                                <a href="http://www.ui.cn/exp.html" target="_self">
                                    分享
                                    <i className="icon-down"></i>
                                </a>
                                <div className="subnav-hd cl">
                                    <ul className="subnav-ct-hd">
                                        <li>
                                            <a href="http://topic.ui.cn/" target="_self">专题</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ui.cn/exp.html?scatid=11" target="_blank">教程</a>
                                        </li>
                                        <li>
                                            <a href="http://read.ui.cn" target="_self">书籍</a>
                                        </li>
                                        <li>
                                            <a href="http://study.ui.cn/" target="_self">每周临摹</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                </div>
            </div>

        );
    }
}

