import React from 'react'
import back from './back.jpeg';
import { Link } from 'react-router-dom'

function Here() {


    const navStyle = {
        color: "aqua",
        textDecoration: "none"
    };

    return (
        <div>
                <div className="app">
                  <h1>Welcome to pilltop app</h1>
                  <h3>An app that helps you keep track of your drug prescriptions</h3>
                  <img src={back}  className= "back" />
                </div>
                <div className="account">
                    <h2>Create an account</h2>
                    <form name="RegForm" action="/signup" onClick="return formField()">
                        <div className="form">
                           <label>First Name</label>
<<<<<<< HEAD
                           <input type="text" name="first"required />
                           <br />
                           <label>Last Name</label>
                           <input type="text"  name="last" required />
                           <br />
                           <label>Email</label>
                           <input type="text" name="email" required />
                           <br />
                           <label>Age</label>
                           <input type="number" number="age"required />
                           <br />
                           <label>Password</label>
                           <input type="password" name="password" required />
=======
                           <input type="text" name="first" />
                           <br />
                           <label>Last Name</label>
                           <input type="text"  name="last"/>
                           <br />
                           <label>Email</label>
                           <input type="text" name="email" />
                           <br />
                           <label>Age</label>
                           <input type="number" number="age"/>
                           <br />
                           <label>Password</label>
                           <input type="password" name="password" />
>>>>>>> c3073db9a4b7124d7d93b96d180843d1fd8dd18f
                           <button className="but">Signup</button>
                           <p className="end">Already have an account? Login</p>
                           <Link style={navStyle} to="/home">
                               <p className="pee">here</p>
                           </Link>
                        </div>
                        
                    </form>
                    
                </div>
        </div>
    )
}

export default Here



