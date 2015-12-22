import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as LayoutActions from '../actions/layout';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

//框架组件
class App extends Component{

    render(){
        const { user , layout , version } = this.props;
        const { sidebarOpen } = layout;
        const layoutClass = classNames('wrapper',{open : sidebarOpen});

        return (
          <div className={layoutClass}>

                <div className="wrap">
                    <Header />

                    {!this.props.children && <Home />}
                    {this.props.children}

                </div>
                <Footer/>
          </div>
        );
    }
}
function mapStateToProps(state) {
  return {
        version : state.version,
        user : state.user,
        layout : state.layout.present
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
