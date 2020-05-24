import React from 'react'
import  { Link } from 'react-router-dom'


function Signout() {
    const navStyle = {
        color: "aqua",
        textDecoration: "none"
    };
    return (
        <div className="account">
             <h2>Create an account</h2>
                    <form name="RegForm" action="/signup" onClick="return formField()">
                        <div className="form">
                           <label>First Name</label>
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
                           <button className="but">Signup</button>
                           <p className="end">Already have an account? Login</p>
                           <Link style={navStyle} to="/home">
                               <p className="we">here</p>
                           </Link>
                        </div>
                        
                    </form>
        </div>
    )
}

export default Signout
