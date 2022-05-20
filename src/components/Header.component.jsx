import React from 'react'
import { Link } from 'react-router-dom'
import loginService from "../services/Login.service";
import { useEffect, useState } from 'react';
const LoginService = new loginService()

function Header({ loginStatus, setLoginStatus }) {
  useEffect(() => {
    setLoginStatus({ isLoggedIn: LoginService.isLoggedIn, userInfo: LoginService.userInfo })
  }, [loginStatus])
  return (
    <header>
      <div className="header-container">
        <div className="logo-image">
          <img src="/logo192.png" alt="Logo sits here" />
        </div>
        <div className="header-crumbs">
          <div className="header-crumb routing-crumb"><a href="#">about</a></div>
          <div className="header-crumb routing-crumb"><a href="#">contact us</a></div>
          {
            !loginStatus.isLoggedIn ? (<>
              <div className="header-crumb routing-crumb"><Link to="/login">{loginStatus.isLoggedIn ? "Logout" : "Login"}</Link></div>
              <div className="header-crumb button"><a href="#">Create account</a></div>
            </>) : (<>
              <div className="header-crumb button"><button >Logout</button></div>
            </>)
          }
        </div>
      </div>
    </header>
  )
}



export default Header