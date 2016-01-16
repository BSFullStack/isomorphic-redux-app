import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
export default class TagList extends Component {
    render(){
        const { className ,tags} = this.props;
        return (
            <li className="tagPopup">
                <a className="tag" href="javascript:;" >
                    php{tags}
                </a>
            </li>
        );
    }
}
