import React from 'react';
import './App.css';
import Nav from './Nav';
import NavMobile from './NavMobile'
import Home from './Home';
import Prescriptions from './Prescriptions';
import Support from './Support'
import Logout from './Logout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Here from './Here.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <NavMobile />
        <switch> 
          <Route path="/" exact component={Page} />
          <Route path="/home" component={Home} />
          <Route path="/prescriptions" component={Prescriptions}/>
          <Route path="/support" component={Support} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/here" component={Here} />
          <Route path="/logout" component={Logout} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
const Page = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
  

