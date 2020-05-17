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
<<<<<<< HEAD
                      <input type="password" required/>
=======
                      <input type="password" required />
>>>>>>> c3073db9a4b7124d7d93b96d180843d1fd8dd18f
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



