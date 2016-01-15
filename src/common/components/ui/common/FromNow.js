import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import moment from 'moment';
/**
 * 时间显示ago
 */
export default class Answers extends Component {
    render(){

        const { time , type }  = this.props;
        let sAction = type == "1" ? "回答":"提问";
        const leftTime = moment(time).fromNow();
        return (
            <span className="ml10 text-muted" >{leftTime}{' '}{sAction}</span>
        );
    }
}
