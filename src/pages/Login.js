
// export default function Login(){
//     return (<div>sfsdfgsdfg</div>)

import storageService from "../services/storage.service";

// }
const StorageService = new storageService()

const Login = ({loginStatus, setLoginStatus}) => {
    return (
        <div className="login-page">
            <h4> Login </h4>
        </div>
    );
}

export default Login;