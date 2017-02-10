import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

class Login extends React.Component {
  onNextBtnClick(){
    let {dispatch} = this.props;
    dispatch(login(this.refs.phone.value, this.refs.pwd.value));
    
  }

  render() {
    return (
      <div className="page">
        <div className="home-bg img-sty">
          <div className="overflow">
            
          </div>
          <div className="tex-cent mt50">
            <div className="logo-img"></div>
          </div>
          <div className="login-regist">
            <ul>
              <li>
                <div>
                  <span className="phone-icon img-sty"></span>
                  <input ref="phone" type="text" name="" placeholder="请输入手机号"/>
                </div>
                <p className="prompt sz12-ff0">请输入正确的手机号</p>
                <p className="prompt sz12-ff0">手机号不能为空</p>

              </li>
              <li className="mt20">
                <div>
                  <span className="password-icon img-sty"></span>
                  <input ref="pwd" type="password" name="" placeholder="请输入密码"/>
                </div>
                <p className="prompt sz12-ff0">请输入正确的密码</p>
                <p className="prompt sz12-ff0">密码不能为空</p>
              </li>
            </ul>
            <a className="font-white fr mt5" href="#">忘记密码？</a>
          </div>
          <div className="circle-yel bc-yel" onClick={this.onNextBtnClick.bind(this)}>
            <span className="db img-sty throw-icon"></span>
          </div>
          <p className="mt30 tex-cent font-white le-sp2">没有账号？立即<a className="font-yel" href=""><span>注册</span></a></p>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    
  }
}

export default connect(
  mapStateToProps
)(Login)