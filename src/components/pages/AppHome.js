import React from 'react';
import '../../App.css';
import CardsLoggedIn from '../CardsLogedIn';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import NavbarLoggedIn from '../NavbarLoggedIn';
import { Link } from 'react-router-dom';
import './AppHome.css';

function AppHome() {
  return (
    <>
      <NavbarLoggedIn />
      <Link to="/milk"><button class="button"> SMOOTHIE </button></Link>
      <Link to="/coffee"><button class="button"> COFFEE </button></Link>
      <Link to="/cookie"><button class="button"> COOKIE </button></ Link>
      <Link to="/cake"><button class="button"> CAKE </button></ Link>
      <Link to="/pies"><button class="button"> PIES </button></ Link>
      <Link to="/prediction"><button class="button"> Prediction </button></Link>

    </>
  );
}
export default AppHome;