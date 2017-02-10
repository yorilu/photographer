import React from 'react'

export default class Login extends React.Component {
    render() {
        return (
            <div>
              <div><input placeholder="请输入手机号"/></div>
              <div><input placeholder="请输入验证码"/></div>
              <div><input placeholder="请输入密码"/></div>
              <div><div className="">继续</div></div>
              <div>已有账号？立即<span>登录</span></div>
            </div>
        )
    }
}