import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Recipe from './components/Recipes/Recipes';
import AddRecipe from './components/AddRecipes/AddRecipe';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component  {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
        <div>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        <Switch>
          <Route path="/" exact component={() => <Home drawerClickHandler={this.drawerToggleClickHandler} />} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/add" component={AddRecipe} />
        </Switch>
      </div>
      </Router>
    );
 }
}

export default App;
  

