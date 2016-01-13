import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tab , Tabs , TabList , TabPanel  } from './ui/tabs';
class Login extends Component {
    constructor(props) {
        super(props);
        let selectedIndex=1;
        if(props.location.hash == "#signin"){
            selectedIndex = 0;
        }else{
            selectedIndex = 1;
        }
        this.state = {
            selectedIndex:selectedIndex
        };
    }
    componentWillReceiveProps(nextProps){
        debugger;
        const { loginInfo , registerInfo } = nextProps;
        const { bl , msg , error  } = loginInfo.data;
        const { bl:regbl , msg:regmsg , error:regerr } = registerInfo.data;
        //登录成功 || 注册成功
        if( ( bl == "1" && !error ) || (regbl == "1" && !regerr) ){
            return this.props.history.push("/topics");
        }

        this.setState({
            bl : bl  == "" || regbl,
            msg :msg || regmsg,
            error:error || regerr ,
            showError :error || regerr
        });

    }
    render() {
        const {
            bl ,
            msg ,
            error ,
            showError ,
            selectedIndex
        } = this.state;

        debugger;
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
                                selectedIndex={selectedIndex}
                                onSelect={::this.handlerChangeTab}
                                >
                                <TabList>
                                    <Tab index="0">注册</Tab>
                                    <Tab index="1">登录</Tab>
                                </TabList>
                                <TabPanel className="view-signin">

                                        <input type="password" hidden />
                                        <input type="hidden" name="_xsrf" value="d97121370f3efb32b5463d734fed325d" />
                                        <div className="group-inputs">
                                            <div className="name input-wrapper">
                                                <input required type="text" name="name" ref="registerUserNameInput" aria-label="用户名" placeholder="用户名" />
                                            </div>
                                            <div className="email input-wrapper">
                                                <input required="" type="text" className="account"  ref="registerEmailInput" name="phone_num" aria-label="常用邮箱" placeholder="常用邮箱" />
                                            </div>
                                            <div className="input-wrapper">
                                                <input required="" type="password" name="password"  ref="registerPasswordInput" aria-label="密码" placeholder="密码（不少于 6 位）"/>
                                            </div>
                                        </div>
                                        <div className="failure" id="summary"><ul></ul></div>
                                        <div className="button-wrapper command">
                                            <button className="sign-button submit" type="button" onClick={::this.handlerRegister}>注册SKT-Topic</button>
                                        </div>
                                        {showError && <label className="error show">{msg}</label> }
                                </TabPanel>
                                <TabPanel className="view-signup" >

                                        <input type="hidden" name="_xsrf" value="d97121370f3efb32b5463d734fed325d" />
                                        <div className="group-inputs">
                                            <div className="email input-wrapper">
                                                <input type="text" name="email" onFocus={::this.hideError}  aria-label="邮箱" ref="loginEmailInput" placeholder="邮箱" required="" />
                                            </div>
                                            <div className="input-wrapper">
                                                <input type="password" name="password"  aria-label="密码" ref="loginPasswordInput" placeholder="密码" required="" />

                                            </div>

                                        </div>
                                        <div className="failure" id="summary">
                                            <ul></ul>
                                        </div>
                                        <div className="button-wrapper command">
                                            <button className="sign-button submit" type="button" onClick={::this.handlerLogin}>登录</button>
                                        </div>

                                        <div className="weibo-signup-wrapper">
                                        </div>
                                        {showError && <label className="error show">{msg}</label> }
                                </TabPanel>
                            </Tabs>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
    //隐藏错误信息
    hideError(){
        this.setState({
            showError:false
        });
    }
    //切换标签页，粗劣实现
    handlerChangeTab(selectedIndex){
        if(selectedIndex == 1){
            this.props.history.replace("/login#signup")
         }else{
            this.props.history.replace("/login#signin")
         }

        //this.setState({selectedIndex});
    }
    //注册
    handlerRegister(){
        const { registerEmailInput , registerPasswordInput , registerUserNameInput } = this.refs;
        const [
                email ,
                password ,
                name
            ] = [
                registerEmailInput.value ,
                registerPasswordInput.value ,
                registerUserNameInput.value
            ];
        //验证 交给盛刚
        this.props.doRegister({
            email,
            password,
            name
        });

    }
    //登录
    handlerLogin(){

        const { loginEmailInput , loginPasswordInput } = this.refs;
        const [ email , password ] = [ loginEmailInput.value , loginPasswordInput.value ];
        //书写验证规则 盛刚做

        this.props.doLogin({
            email,
            password,
            r:Math.random()
        });
    }
}

export default Login;
