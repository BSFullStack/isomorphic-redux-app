import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
export default class TagList extends Component {
    render(){
        const { className , name , id } = this.props;
        return (
            <li className="tagPopup">
                <a className="tag" data-id= {id} href="javascript:;" >
                   {name}
                </a>
            </li>
        );
    }
}
