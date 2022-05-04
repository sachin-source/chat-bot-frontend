import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import React, { useState } from "react";
import Dashboard from './pages/Dashboard';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header.component';

function App() {
  const [loginStatus, setLoginStatus] = useState({ isLoggedIn: false, userInfo: { username: '', _id: '', email: '' } });
  return (
    <Router>
      <div className="dashboard-container">
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
