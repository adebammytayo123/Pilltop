import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const navStyle = {
        color: "aqua",
        textDecoration: "none"
    };
    return (
        <div>
            <div className="last">
                  <h2>Login to your account</h2>
                  <form>
                      <label>Email</label>
                      <br />
                      <input type="email" required />
                      <label>Password</label>
                      <input type="password" required/>
                    </form>
                    <button className="hey">Login</button>
                    <p className="an"> Dont have an account? Sign up</p>
                    <Link style={navStyle} to="/Here">
                        <p className="we">here</p>
                    </Link>
                </div> 
        </div>
    )
}

export default Signup
