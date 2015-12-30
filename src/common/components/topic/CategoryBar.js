/**
 * 分类栏
 */
import React, { Component, PropTypes } from 'react';

export default class CategoryBar extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <ul className="talk-nav">
                {this.getCateGories()}
            </ul>
        );
    }
    getCateGories(){
        const {
            children ,
            activeKey ,
            ...other
        } = this.props;

        return React.Children.map(children,(cateItem)=>{

            let { cateKey } = cateItem.props;

            return React.cloneElement(cateItem,{
                active: activeKey === cateKey,
                onClick:this.handlerClick.bind(this,cateKey)
            });
        })
    }
    handlerClick(cateKey){

        this.props.onSelectCategory && this.props.onSelectCategory(cateKey);
    }
}
