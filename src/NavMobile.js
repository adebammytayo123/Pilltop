import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import drug from '../src/drug.jpg'

function NavMobile() {
    const navStyle = {
        color: "white",
        textDecoration: "none"
    };


  return (
    <div>
        <nav className="navmobile">
            <div className="top">
               <img src={drug}  className="pill" alt=""/>
               <h2 className="tol">Pilltol</h2>
            </div>
            <ul className="nav-links">
                <Link style={navStyle} to="/home">
                    <li className="hi">Home</li>
                </Link>
                <Link style={navStyle} to="/prescriptions" className="pres">
                    <li>Prescriptions</li>
                </Link>

            </ul>
        </nav>
    </div>
  );
}

export default NavMobile;
