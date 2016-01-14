import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
    render() {
        return (
           <div className="global-nav" xmlns="http://www.w3.org/1999/html">
                <nav className="container nav">
                    <div className="dropdown m-menu">
                        <a href="javascript:void(0);" id="dLabel" className="visible-xs-block m-toptools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="glyphicon glyphicon-align-justify"></span>
                            <span className="mobile-menu__unreadpoint"></span>
                        </a>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">

                        </ul>
                    </div>

                    <h1 className="logo"><a className="sf" href="/">SKT-TOPIC</a></h1>

                    <a href="/ask" className="visible-xs-block pull-right m-ask m-toptools">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </a>

                    <form action="/search" className="header-search pull-left hidden-sm hidden-xs">
                        <button className="btn btn-link">
                            <span className="sr-only">搜索</span>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                        <input id="searchBox" name="q" type="text" placeholder="输入关键字搜索" className="form-control" value="" />
                    </form>


                    <ul className="opts pull-right list-inline hidden-xs">
                        <li className="opts__item dropdown hoverDropdown write-btns">
                        <a className="dropdownBtn" data-toggle="dropdown" href="/ask" >我要提问</a>
                        </li>
                    </ul>
            </nav>
        </div>
        );
    }
}

