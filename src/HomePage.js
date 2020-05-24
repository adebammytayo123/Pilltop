import React from 'react'
import back from './back.jpeg';

const HomePage = ({alt}) => (
    <div className="app">
                    <h1>Welcome to pilltop app</h1>
                    <h3>An app that helps you keep track of your drug prescriptions</h3>
                    <img src={back}  className= "back" alt="tab" />
    </div>    
  )
  export default HomePage;