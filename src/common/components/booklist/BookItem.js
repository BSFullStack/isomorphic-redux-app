import React , { Component } from 'react';

/**
 * 图书列表明细
 */
class BookItem extends Component{

    render(){



        return (
            <li>
                <div className="topic">
                    <h6>
                        <img src="/PDF.png" className="type" />
                        <a href="/p-3137633948772.html" target="_blank">
                            住宅楼施工组织设计(作业)
                        </a>
                    </h6>
                    <span className="shop">
                        <span className="posttime">
                            <a href="zhanglaifa" target="_blank" className="blue">
                                zhanglaifa
                            </a>{' '}
                            上传于{' '}2015-12-21 21:16
                        </span></span>
                 </div>
            </li>
        );
    }


}

export default BookItem;

