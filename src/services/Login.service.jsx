import React from 'react'

function LoginService() {
    return Boolean(localStorage.getItem("adminToken"))
}

export {LoginService}
