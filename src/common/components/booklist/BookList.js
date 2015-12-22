import React , { Component } from 'react';
import BookItem from './BookItem';

/**
 * 图书列表明细
 */

export default  class BookList extends Component{

    render(){

        const { datas = [] , className } = this.props;

        let chdComponent ;

        datas.length > 0 ? chdComponent = this._renderChildren() : null;
        return (
            <ul className="bookul">
                {chdComponent}
            </ul>
        );
    }
    //渲染子组件
    _renderChildren(){
        const { datas = []} = this.props;
        return datas.map( (item,index)=>{
            const { id , ...other } = item;
            return (
                <BookItem  {...other} key={index}/>
            );
        });
    }

}


