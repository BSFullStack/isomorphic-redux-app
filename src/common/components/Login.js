import React, { Component } from 'react';
import { Link } from 'react-router';
class Login extends Component {
    render() {
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
                          <span className="wel_back">欢迎回来</span>
                            <span className="register">还没有账号？<Link to="register" className="register_blue">立即注册</Link></span>
                        </div>
                        <div className="con_inp login_left">
                          <form>
                              <div className="login_inp login_name">
                                  <i className="icon-user-line fss log-i"></i>
                                  <input type="text" className="login_txt msl" placeholder="请输入用户名/邮箱" />
                              </div>
                              <div className="login_inp login_password">
                                  <i></i>
                                  <input type="password" className="login_pw msl" placeholder="请输入密码" />
                              </div>
                              <div>
                                  <button className="login-button">登录</button>
                                  <p className="login-msg">
                                      <span>如登录出现异常,请清理浏览器缓存后再尝试。</span>
                                      <a href="#" className="wj_pw">忘记密码？</a>
                                  </p>
                              </div>
                          </form>

                        </div>

                      </div>
                      <div className="content_right">
                        <h2>第三方账号</h2>
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
                    <div className="footer">京ICP备14007358号-1 \ 京公网安备11010802014104号 \ Powered by © 2008-2015 UI.CN
                  </div>
              </div>
            </div>
        );
    }
}

export default Login;
