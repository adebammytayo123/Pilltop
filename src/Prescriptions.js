import React from 'react';
import './App.css';
// import back from './back.jpeg';
// import { Link } from 'react-router-dom'
import Nav from './Nav'
import Signup from './Signup'

function Prescriptions() {
//   const navStyle = {
//     color: "aqua",
//     textDecoration: "none"
// }; 

  return (
    <div className="pab">
        <Nav />
        <Signup />
    </div>
  );
}

export default Prescriptions;
