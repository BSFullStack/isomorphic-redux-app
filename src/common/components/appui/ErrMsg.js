import React , { Component } from 'react';


class ErrMsg extends Component{

    render(){
        var ss=''
        debugger;
        switch(this.props.type){
            case "name":
                ss = '请填写正确的名字';
            
            case "email":
                ss = '请填写正确的E-Mail';
            
            case "password":
                ss = '请填写正确的密码';
            
        }

        return (
            <label className="errTip" >{ss}</label>
        );
    }


}

export default ErrMsg;

