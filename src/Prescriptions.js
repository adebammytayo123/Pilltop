import React from 'react';
import './App.css';
import back from './back.jpeg';
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup'

function Prescriptions() {
  const navStyle = {
    color: "aqua",
    textDecoration: "none"
}; 

  return (
    <div className="pab">
       <HomePage />
        <Signup />
    </div>
  );
}

export default Prescriptions;
