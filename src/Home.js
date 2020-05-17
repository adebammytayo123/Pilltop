import React from 'react'
import './App.css';
import back from './back.jpeg';
import { Link } from 'react-router-dom'




function Home() {
    const navStyle = {
        color: "aqua",
        textDecoration: "none"
    };
        return (
            <div className="pab">
               <div className="app">
                  <h1>Welcome to pilltop app</h1>
                  <h3>An app that helps you keep track of your drug prescriptions</h3>
                  <img src={back}  className= "back" />
                </div>
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
                    <Link style={navStyle} to="/here">
                        <p className="we">here</p>
                    </Link>
                </div>
            </div>
        );
}

export default Home;



