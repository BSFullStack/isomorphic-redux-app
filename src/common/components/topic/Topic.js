import React , { Component } from 'react';
import { TOPIC } from '../../constants/topic';
import cx from 'classnames';
import moment from 'moment';
import TagList from '../ui/topicDetail/TagList';
/**
 * 列表明细
 */
class Topic extends Component{

    render(){

        const {
            id ,
            title ,
            viewtotals = 0,
            answeredTime ,
            createTime ,
            answersCount ,
            userInfo ,
            tags ,
            status  } = this.props;
        let replyTime , statusCls = TOPIC.STATUS[status];

        if( answersCount === 0){
            replyTime = (
                <a href="javascript:;">{moment(createTime).fromNow()}{' '}提问</a>
            );
        }else{
            replyTime = (
                <a href="javascript:;">{moment(answeredTime).fromNow()}{' '}回答</a>
            );
        }
        return (
            <section className="stream-list__item">
                <div className="qa-rank">
                    <div className="votes hidden-xs">
                        0
                        <small>投票</small>
                    </div>
                    <div className={cx('answers',statusCls)}>
                        { answersCount }
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
                            <a href="javascript:;" >
                               {userInfo && userInfo.name}
                            </a>
                            <span className="split">{' '}</span>
                            {replyTime}
                         </li>
                    </ul>
                    <h2 className="title">
                        <a href="javascript:;" onClick={this.viewDetail.bind(this,id)}>
                            {title}
                        </a>
                    </h2>
                    <TagList className="ib" tags={tags} />
                </div>
            </section>
        );
    }
    viewDetail(topicId){
        const { viewDetail } = this.props;
        viewDetail && viewDetail(topicId);
    }
}

export default Topic;

