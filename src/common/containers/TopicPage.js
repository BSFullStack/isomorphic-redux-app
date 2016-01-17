import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Topic from '../components/Topic';
import * as TopicActions from '../actions/topic';


Topic.need = [
    TopicActions.fetchTopics
]

function mapStateToProps(state) {

    let { selectedCategory, topicsByCategory  , user } = state;
    selectedCategory = selectedCategory.present;
    topicsByCategory = topicsByCategory.present;
    const {
        isFetching,
        lastUpdated,
        error,
        count,
        topics
    } = topicsByCategory[selectedCategory] || {
        isFetching: false,
        lastUpdated:false,
        error:{},
        count:0,
        topics: []
    };

    return {
        selectedCategory ,
        user,
        topics ,
        count,
        isFetching ,
        lastUpdated ,
        error
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopicActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);
