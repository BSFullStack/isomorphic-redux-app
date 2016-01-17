import React, { Component, PropTypes } from 'react';

/*关注-收藏按钮组件*/

export default class LoadingWidget extends Component {
	render(){		
		return (
			<div className="spinner">
			  <div className="spinner-container container1">
			    <div className="circle1"></div>
			    <div className="circle2"></div>
			    <div className="circle3"></div>
			    <div className="circle4"></div>
			  </div>
			  <div className="spinner-container container2">
			    <div className="circle1"></div>
			    <div className="circle2"></div>
			    <div className="circle3"></div>
			    <div className="circle4"></div>
			  </div>
			  <div className="spinner-container container3">
			    <div className="circle1"></div>
			    <div className="circle2"></div>
			    <div className="circle3"></div>
			    <div className="circle4"></div>
			  </div>
			</div>
		);
	}
}