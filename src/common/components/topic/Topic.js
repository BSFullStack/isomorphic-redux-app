import React , { Component } from 'react';

/**
 * 图书列表明细
 */
class Topic extends Component{

    render(){
        console.log(this.props);
        return (
            <section className="stream-list__item">
                <div className="qa-rank">
                    <div className="votes hidden-xs">
                        0
                        <small>投票</small>
                    </div>
                    <div className="answers answered">
                        1
                        <small>回答</small>
                    </div>
                    <div className="views hidden-xs">
                        15
                        <small>浏览</small>
                    </div>
                </div>
                <div className="summary">
                    <ul className="author list-inline">
                        <li>
                            <a href="/u/jellybool">
                                JellyBool
                            </a>
                            <span className="split"></span>
                            <a href="/q/1010000004302145/a-1020000004302162">1 分钟前回答</a>
                         </li>
                    </ul>
                    <h2 className="title">
                        <a href="/q/1010000004302145">
                            laravel 5.1的.env里的APP_ENV是怎么用呢？
                        </a>
                    </h2>

                </div>
            </section>
        );
    }
}

export default Topic;

