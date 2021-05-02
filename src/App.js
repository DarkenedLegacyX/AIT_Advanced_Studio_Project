import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import AppHome from './components/pages/AppHome';
import Milk from './components/pages/IngredientPage/Milk';
import Coffee from './components/pages/IngredientPage/Coffee';
import Cookie from './components/pages/IngredientPage/Cookie';
import Cakes from './components/pages/IngredientPage/Cakes';
import Pies from './components/pages/IngredientPage/Pies';
import Predction from './components/pages/IngredientPage/Prediction';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/app-home' component={AppHome} />
          <Route path='/milk' component={Milk} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/cookie' component={Cookie} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/cake' component={Cakes} />
          <Route path='/pies' component={Pies} />
          <Route path='/prediction' component={Predction} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
