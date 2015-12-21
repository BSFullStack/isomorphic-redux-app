import React, { Component, PropTypes } from 'react';

class Reginster extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }
  render() {
    const { actions } = this.props;

    return (
        <div>
            <h1>注册</h1>

                <input type="text" ref="emailInput" name="email" placeholder="邮箱" data-autocomplete="off"/>
                <br />
                <input type="password" ref="passwordInput" name="password" placeholder="密码"/>
                <br />
                <input type="password"  ref="confirmpasswordInput" name="confirmpassword" placeholder="确认密码"/>
                <br />
                <input type="button" value="注册" onClick={this.handleRegister}/>

        </div>
    );
  }
  handleRegister(){
        const { emailInput , passwordInput , confirmpasswordInput } = this.refs;

        this.props.register({
            email:emailInput.value,
            password:passwordInput.value,
            confirmpassword:confirmpasswordInput.value,
            r:Math.random()
        });
  }
}



export default Reginster;
