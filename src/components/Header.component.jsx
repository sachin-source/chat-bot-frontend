import React from 'react'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-image">
          <img src="/logo192.png" alt="Logo sits here" />
        </div>
        <div className="header-crumbs">
          <div className="header-crumb routing-crumb"><a href="#">about</a></div>
          <div className="header-crumb routing-crumb"><a href="#">contact us</a></div>
          <div className="header-crumb routing-crumb"><a href="#">Login</a></div>
          <div className="header-crumb create-account"><a href="#">Create account</a></div>
        </div>
      </div>
    </header>
  )
}

export default Header