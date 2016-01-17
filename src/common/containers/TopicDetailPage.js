import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import TopicDetail from '../components/TopicDetail';
import * as TopicDetailActions from '../actions/topicDetail';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method

function mapStateToProps(state) {

    let { topicDetail } = state;

    const {
        data,
        error,
        user,
        newAnswer,
        isFetching
    } =  topicDetail || {
        user:null,
        data:null,
        error:false,
        newAnswer:null,
        isFetching:false
    };

    return {
        newAnswer,
        data,
        user,
        error,
        isFetching
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopicDetailActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicDetail);
