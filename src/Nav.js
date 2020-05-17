import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import drug from '../src/drug.jpg'

function Nav() {
    const navStyle = {
        color: "white",
        textDecoration: "none"
    };


  return (
    <div>
        <nav className="nav">
            <div className="top">
<<<<<<< HEAD
               <img src={drug}  className="pill" alt=""/>
=======
               <img src={drug}  className="pill"/>
>>>>>>> c3073db9a4b7124d7d93b96d180843d1fd8dd18f
               <h2 className="tol">Pilltol</h2>
            </div>
            <ul className="nav-links">
                <Link style={navStyle} to="/home">
                    <li className="hi">Home</li>
                </Link>
                <Link style={navStyle} to="/prescriptions">
                    <li>Prescriptions</li>
                </Link>
                <Link style={navStyle} to="/support">
                    <li>Support</li>
                </Link>
                <Link style={navStyle} to="/logout">
                    <li>Logout</li>
                </Link>

            </ul>
        </nav>
    </div>
  );
}

export default Nav;
