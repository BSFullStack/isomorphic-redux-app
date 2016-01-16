import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Publish from '../components/Publish';
import * as PublishActions from '../actions/publish';

function mapStateToProps(state) {

    var publishInfo= state;
       console.log(publishInfo+"123")
    return {
        publishInfo
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PublishActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Publish);
