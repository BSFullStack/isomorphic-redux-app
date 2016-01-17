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
        const { user } = this.props;
        let menuComponent;
        if(user){
            menuComponent = (
                <ul className="opts pull-right list-inline hidden-xs">
                        <li className="opts__item">
                            <a href="/login#signup" className="SFLogin em ml10" >退出</a>
                        </li>
                </ul>
            )
        }else{
            menuComponent = (
                <ul className="opts pull-right list-inline hidden-xs">
                    <li className="opts__item">
                        <a href="/login#signup" className="SFLogin em ml10" >注册 · 登录</a>
                    </li>
                </ul>
            )
        }
		return (
			<div className="exitBox">
                { menuComponent }
			</div>
		);
	}
    //处理登出单击
    handlerClick(e){

    }
}
