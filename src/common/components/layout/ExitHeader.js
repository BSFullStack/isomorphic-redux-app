import React,{Component,PropTypes} from 'react';
export default class EixtWidget extends Component {
	constructor (props) {
		super (props);		
	}
	mouseover () {		
		$(".exit-menu").show();	
	}
	mouseout () {	
		$(".exit-menu").hide();	
		
	}
	render () {		
		return (
			<div className="exitBox" onMouseOver={this.mouseover.bind(this)} onMouseOut={this.mouseout.bind(this)}>
				<span className="photoMenu"></span>
				<div className="exit-menu">
					<ul className="exit-content">
						<li><a href="#">我的主页</a></li>
						<li><a href="#">退出</a></li>
					</ul>
				</div>
			</div>
		);
	}
}