import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email....." />
        <label htmlFor="">Password</label>
        <input type="text" className="loginInput" placeholder="Enter your password....." />
        <button className="loginButton">Login</button>

    </form>
        <button className="loginRegisterButton">
          <Link to="/register">Register</Link>
        </button>
      
    </div>
  )
}

export default Login
