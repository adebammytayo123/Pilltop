import React from 'react'
import './App.css';
// import back from './back.jpeg';
// import { Link } from 'react-router-dom'
import Signup from './Signup'
import HomePage from './HomePage'




function Home() {
        return (
            <div className="pab">
                <HomePage />
                <Signup />
            </div>
        );
}

export default Home;



