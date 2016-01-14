import React , { Component } from 'react';
import { TOPIC } from '../../constants/topic';
import cx from 'classnames';
import moment from 'moment';
/**
 * 图书列表明细
 */
class Topic extends Component{

    render(){

        const {
            title ,
            viewtotals = 0,
            answeredTime ,
            createTime ,
            commentstotal = 0,
            userInfo ,
            status  } = this.props;
        let replyTime , statusCls = TOPIC.STATUS[status];

        if(commentstotal === 0){
            replyTime = (
                <a href="javascript:;">{moment(createTime).fromNow()}提问</a>
            );
        }else{
            replyTime = (
                <a href="javascript:;">{moment(answeredTime).fromNow()}回答</a>
            );
        }
        return (
            <section className="stream-list__item">
                <div className="qa-rank">
                    <div className="votes hidden-xs">
                        0
                        <small>支持</small>
                    </div>
                    <div className={cx('answers',statusCls)}>
                        { commentstotal }
                        <small>回答</small>
                    </div>
                    <div className="views hidden-xs">
                        { viewtotals  }
                        <small>浏览</small>
                    </div>
                </div>
                <div className="summary">
                    <ul className="author list-inline">
                        <li>
                            <a href="/u/jellybool">
                               {userInfo && userInfo.name}
                            </a>
                            <span className="split">{' '}</span>
                            {replyTime}
                         </li>
                    </ul>
                    <h2 className="title">
                        <a href="javascript:;">
                            {title}
                        </a>
                    </h2>

                </div>
            </section>
        );
    }
}

export default Topic;

