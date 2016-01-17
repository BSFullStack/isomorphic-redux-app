import React, { Component, PropTypes } from 'react';

/*关注-收藏按钮组件*/

export default class ButtonWiget extends Component {
	render(){
		const {text,className,titpText}=this.props;
		return (
			<div className="widget-attention">
				<button type="button" className={className} data-id="1010000004307161" data-type="question" data-toggle="tooltip" data-placement="e" title="" data-original-title={titpText}>
	                     {text}
	            </button>	            
			</div>
		);
	}
}