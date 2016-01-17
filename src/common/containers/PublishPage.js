import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Publish from '../components/Publish';
import * as PublishActions from '../actions/publish';

//获取所有标签。这里实现不是太好。以后再改进
Publish.need = [
    PublishActions.fetchTags
]

function mapStateToProps(state) {

    return {
        publishInfo:state.publish,
        user:state.user
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PublishActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Publish);
