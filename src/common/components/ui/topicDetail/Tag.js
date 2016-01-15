import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
export default class TagList extends Component {
    render(){
        const { className } = this.props;
        return (
            <li className="tagPopup">
                <a className="tag" href="javascript:;" >
                    php
                </a>
            </li>
        );
    }
}
