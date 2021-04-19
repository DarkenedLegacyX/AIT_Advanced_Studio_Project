import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import AppHome from './components/pages/AppHome';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
