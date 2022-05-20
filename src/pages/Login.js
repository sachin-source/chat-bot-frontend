import loginService from "../services/Login.service";
import React, { useEffect, useState } from 'react';
const LoginService = new loginService()

const Login = ({loginStatus, setLoginStatus}) => {
    useEffect(() => {
        setLoginStatus({ isLoggedIn : LoginService.isLoggedIn, userInfo : LoginService.userInfo})
    },[loginStatus])
    // { isLoggedIn: false, userInfo: { username: '', _id: '', email: '' } }
    // setLoginStatus({ isLoggedIn : LoginService.isLoggedIn, userInfo : LoginService.userInfo})
    return (
        <div className="login-page">
            <h4> Login </h4>
            {loginStatus.isLoggedIn ? "yes" : "no" }
        </div>
    );
}

export default Login;