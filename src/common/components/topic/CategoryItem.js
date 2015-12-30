/**
 * 分类栏条目
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
export default class CategoryBar extends Component {

    render(){
        const { text , active , link ,...other } = this.props;
        return (
            <li {...other}>
                <Link to={link} className={classnames({active})} >
                    {text}
                </Link>
            </li>
        );
    }
}
