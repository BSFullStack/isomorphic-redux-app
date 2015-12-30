import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as LoginActions from '../actions/login';
function mapStateToProps(state) {
    const { bl , error , msg } = state ;
    return {
        bl,
        error,
        msg
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
