import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as LoginActions from '../actions/login';
function mapStateToProps(state) {
	
    return {
        loginInfo:state.login,
        registerInfo:state.register

    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
