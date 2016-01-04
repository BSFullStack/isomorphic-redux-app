import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
class Reginster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps){
        const { registerInfo } = nextProps;

        const { bl , msg , error  } = registerInfo.data;

        this.setState({
            bl ,
            msg ,
            error
        });

  }
  render() {
    const { actions } = this.props;
    const { bl , msg , error } = this.state;
    let errorMsg ;
    if(bl == "0" && error){
        errorMsg = (
            <p>{msg}</p>
        );
    }
    return (
        <div>
            <div className="header">
                    <div className="head_content">
                        <div className="logo">
                            <h1>
                                <a href='#'>
                                    <img src="/img/log-logo.png" />
                                </a>
                            </h1>
                            <div className="logo_text">
                                <strong>欢迎来到UI中国</strong>
                                <p>UI中国 专业界面设计平台</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="content_wrap">
                    <div className="content_box">
                        <div className="content_left">
                            <div className="con_lef_top">
                                <span className="wel_back">新用户注册</span>
                                    <span className="register">已有账号？<Link to="/login" className="register_blue">马上登录</Link></span>
                            </div>
                            <div className="con_inp login_left">

                                    <div className="login_inp login_name">
                                        <i></i>
                                        <input type="text" className="login_form login_txt msl" placeholder="请输入用户名" ref="nameInput" />
                                    </div>
                                    <div className="login_inp login_password">
                                        <i></i>
                                        <input type="text" className="login_form login_pw msl" placeholder="设置密码" ref="passwordInput"/>
                                    </div>
                                    <div className="login_inp">
                                        <i></i>
                                        <input type="text" className="login_form msl" placeholder="确认密码" ref="repasswordInput"/>
                                    </div>
                                    <div className="login_inp">
                                        <i></i>
                                        <input type="text" className="login_form msl" placeholder="设置邮箱" ref="emailInput"/>
                                    </div>
                                    <div>
                                        { errorMsg}
                                        <button className="login-button" onClick={::this.handlerClick}>注册</button>

                                    </div>

                            </div>

                        </div>
                        <div className="content_right">
                            <h2>也可使用以下账号简单注册快人一步</h2>
                            <ul className="login_party">
                                <li className="sina_login">
                                    <a href="#">
                                        <i></i><span>新浪微博登录</span>
                                    </a>
                                </li>
                                <li className="qq_login">
                                    <a href="#">
                                        <i></i><span>QQ账号登录</span>
                                    </a>
                                </li>
                                <li className="mi_login">
                                    <a href="#">
                                        <i></i><span>小米账号登录</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="footer_wrap">
                    <div className="footer">京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by © 2008-2015 UI.CN</div>
                </div>
        </div>
    );
  }
  handlerClick(){
        const { nameInput, emailInput  , passwordInput  , repasswordInput } = this.refs;
        const name = nameInput.value.trim() ,
              email = emailInput.value.trim() ,
              password = passwordInput.value.trim() ,
              repassword = repasswordInput.value.trim() ;

        if(repassword!=password){
            alert("两次输入密码不对");
            return ;
        }
        this.props.register({
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value,
            repassword:repasswordInput.value,
            r:Math.random()
        });
  }
}



export default Reginster;
