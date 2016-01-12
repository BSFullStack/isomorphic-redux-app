import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tab , Tabs , TabList , TabPanel  } from './ui/tabs';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(nextProps){
        const { loginInfo } = nextProps;

        const { bl , msg , error  } = loginInfo.data;
        if(bl == "1" && !error){
            //登录成功
            return this.props.history.push("/topics");
        }
        this.setState({
            bl ,
            msg ,
            error
        });

    }
    render() {
        const { bl , msg , error } = this.state;
        let errorMsg ;
        if(bl == "0" && error){
            errorMsg = (
                <p>{msg}</p>
            );
        }
        return (
            <div className="zhi  no-auth">
                <div className="index-main">
                    <div className="index-main-body">
                        <div className="index-header">
                            <h1 className="logo hide-text">知乎</h1>
                            <h2 className="subtitle">与世界分享你的知识、经验和见解</h2>
                        </div>
                        <div className="desk-front sign-flow clearfix sign-flow-simple">
                            <Tabs
                                selectedIndex={0}
                                onSelect={::this.handlerChangeTab}
                                >
                                <TabList>
                                    <Tab index="0">注册</Tab>
                                    <Tab index="1">登录</Tab>
                                </TabList>
                                <TabPanel className="view-signin">
                                    <form className="zu-side-login-box" action="/register/email" id="sign-form-1" >
                                        <input type="password" hidden />
                                        <input type="hidden" name="_xsrf" value="d97121370f3efb32b5463d734fed325d" />
                                        <div className="group-inputs">
                                            <div className="name input-wrapper">
                                                <input required="" type="text" name="fullname" aria-label="姓名" placeholder="姓名" />
                                            </div>
                                            <div className="email input-wrapper">
                                                <input required="" type="text" className="account" name="phone_num" aria-label="手机号（仅支持中国大陆）" placeholder="手机号（仅支持中国大陆）" />
                                            </div>
                                            <div className="input-wrapper">
                                                <input required="" type="password" name="password" aria-label="密码" placeholder="密码（不少于 6 位）"/>
                                            </div>
                                        </div>
                                        <div className="failure" id="summary"><ul></ul></div>
                                        <div className="button-wrapper command">
                                            <button className="sign-button submit" type="submit">注册SKT-Topic</button>
                                        </div>
                                    </form>
                                </TabPanel>
                                <TabPanel className="view-signup" >
                                    <form>
                                        <input type="hidden" name="_xsrf" value="d97121370f3efb32b5463d734fed325d" />
                                        <div className="group-inputs">
                                            <div className="email input-wrapper">
                                                <input type="text" name="account" aria-label="手机号或邮箱" placeholder="手机号或邮箱" required="" />
                                            </div>
                                            <div className="input-wrapper">
                                                <input type="password" name="password" aria-label="密码" placeholder="密码" required="" />
                                            </div>
                                            <div className="input-wrapper captcha-module">
                                                <input id="captcha" name="captcha" placeholder="验证码" required="" />
                                                <div className="captcha-container">
                                                    <img className="js-refresh-captcha captcha" width="120" height="30" data-tip="s$t$看不清楚？换一张" alt="验证码" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="failure" id="summary">
                                            <ul></ul>
                                        </div>
                                        <div className="button-wrapper command">
                                            <button className="sign-button submit" type="submit">登录</button>
                                        </div>
                                        <div className="signin-misc-wrapper clearfix">
                                            <label className="remember-me">
                                                <input type="checkbox" name="remember_me" checked="" value="true" /> 记住我
                                            </label>

                                        </div>
                                        <div className="weibo-signup-wrapper">
                                        </div>
                                    </form>
                                </TabPanel>
                            </Tabs>

                        </div>
                        <div className="qrcode-app-download">
                            <a href="/app" className="app-link">
                                <i className="sprite-index-icon-qrcode"></i>
                                <span className="text">下载知乎 App</span>
                                <span className="hovercard">
                                    <span className="intro">扫一扫二维码下载</span>
                                    <span className="image"></span>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    handlerChangeTab(){
        alert("xxx");
    }
    handlerClick(){
        const { nameInput , passwordInput } = this.refs;
        const [ name , password ] = [nameInput.value,passwordInput.value];
        this.props.doLogin({
            name,
            password,
            r:Math.random()
        });
    }
}

export default Login;
