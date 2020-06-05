import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const navStyle = {
        color: "aqua",
        textDecoration: "none"
    };
    return (
        <div>
            <div className="login">
                  <h2 className="heading">Login to your account</h2>
                  <form>
                      <label>Email</label>
                      <br />
                      <input type="email" required />
                      <label>Password</label>
                      <input type="password" required/>
                    </form>
                    <button className="log">Login</button>
                    <p className="sign-up"> Dont have an account? Sign up</p>
                    <Link style={navStyle} to="/here">
                        <p className="linked">here</p>
                    </Link>
                </div>  
        </div>
    )
}

export default Login



