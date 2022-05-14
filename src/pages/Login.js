import loginService from "../services/Login.service";

const LoginService = new loginService()

const Login = ({loginStatus, setLoginStatus}) => {
    // { isLoggedIn: false, userInfo: { username: '', _id: '', email: '' } }
    setLoginStatus(LoginService.isLoggedIn)
    return (
        <div className="login-page">
            <h4> Login </h4>
        </div>
    );
}

export default Login;