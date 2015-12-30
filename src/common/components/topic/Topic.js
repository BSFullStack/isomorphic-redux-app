import React , { Component } from 'react';

/**
 * 图书列表明细
 */
class Topic extends Component{

    render(){
        return (
            <li className="listItem">
                <span className="ansNum">
                    <a href="/detail/2170#rpn">2回复</a>
                </span>
                <div className="listItemCon">
                    <div className="listItemLeft summary">
                        <h2 className="hcon">
                            <a href="#">#每周临摹第十六期#：三十分钟画EVA</a>
                        </h2>
                        <p className="info">
                            <span className="listSp user">肚脐美少年</span>
                            <span className="listSp">今天 16:01发布</span>
                            <span className="listSp">191浏览</span>
                        </p>
                        <div className="infoHide">
                            <p className="pinfo">#每周临摹# 开话题啦~第十六期：三十分钟画EVA发起人：栗子老师 主持人：小u妹教程传送门：http://study.ui.cn/栗子老师坐镇UI中国话题区域，教大家如何利用sketch和ps....
                            </p>
                        </div>
                    </div>
                    <span className="listImage">
                        <img className="preview" src="http://img.ui.cn/talk/1450758487" />
                    </span>
                </div>
            </li>
        );
    }
}

export default Topic;

