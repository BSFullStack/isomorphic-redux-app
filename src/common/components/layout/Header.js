import React, { Component, PropTypes } from 'react';
import EixtWidget from './ExitHeader';
export default class Header extends Component {
    render() {
        const { user } = this.props;

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

                    <h1 className="logo"><a className="sf" href="/topics">SKT-TOPIC</a></h1>
                    <ul className="menu list-inline pull-left hidden-xs">
                        {'                 '}
                    </ul>
                    <ul className="menu list-inline pull-left hidden-xs">
                        <li className="menu__item"><a href="/topics">问答</a></li>
                        <li className="menu__item"><a className="disabled" href="javascript:;">文章</a></li>
                        <li className="menu__item"><a className="disabled" href="javascript:;">活动</a></li>
                    </ul>
                    <a href="/ask" className="visible-xs-block pull-right m-ask m-toptools">
                        <span className="glyphicon glyphicon-pencil"></span>
                    </a>

                    <EixtWidget user={user}/>
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

