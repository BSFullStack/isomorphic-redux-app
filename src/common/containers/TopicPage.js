import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Topic from '../components/Topic';
import * as TopicActions from '../actions/topic';


Topic.need = [
    TopicActions.fetchTopics
]

function mapStateToProps(state) {
    let { selectedCategory, topicsByCategory } = state;
    selectedCategory = selectedCategory.present;
    topicsByCategory = topicsByCategory.present;
    const {
        isFetching,
        lastUpdated,
        error,
        topics
    } = topicsByCategory[selectedCategory] || {
        isFetching: true,
        error:{},
        topics: []
    };

    return {
        selectedCategory ,
        topics ,
        isFetching ,
        lastUpdated ,
        error
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopicActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);
