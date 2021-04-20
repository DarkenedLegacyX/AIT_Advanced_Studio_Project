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

      <Link to="/milk"><button> MILK </button></Link>
      <Link to="/coffee"><button> COFFEE </button></Link>
      <Link to="/cookie"><button> COOKIE </button></ Link>

    </>
  );
}
export default AppHome;