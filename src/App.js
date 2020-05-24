import React from 'react';
import './App.css';
import Nav from './Nav';
import back from './back.jpeg';
import NavMobile from './NavMobile'
import Home from './Home';
import Prescriptions from './Prescriptions';
import Support from './Support'
import Logout from './Logout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Here from './Here.js'
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <NavMobile />
        <switch> 
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={Home} />
          <Route path="/prescriptions" component={Prescriptions}/>
          <Route path="/support" component={Support} />
          <Route path="/here" component={Here} />
          <Route path="/logout" component={Logout} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
  

