import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import Tag from './Tag';

export default class TagList extends Component {
    render(){
        const { className , tags = [] , ...rest } = this.props;
        return (
            <ul className={cx('taglist--inline',className)} {...rest}>
                {  this._getChildren(tags) }
            </ul>
        );
    }
    _getChildren(tags){
        return tags.map((tag,index)=>{
            return <Tag {...tag} key={index}/>
        })
    }
}
