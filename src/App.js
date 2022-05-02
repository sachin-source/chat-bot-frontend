import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import React, {useState} from "react";
import Dashboard from './pages/Dashboard';

function App() {
  const [loginStatus, setLoginStatus] = useState({ isLoggedIn : false, userInfo : { username : '', _id : '', email : '' } });
  return (
  //  <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
  <Dashboard />
  );
}

export default App;
