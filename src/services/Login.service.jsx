import React from 'react'

function LoginService() {
    return Boolean(localStorage.getItem("token"))
}

export {LoginService}
