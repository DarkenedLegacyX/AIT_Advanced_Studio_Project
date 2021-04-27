import React from 'react';
import '../../App.css';
import AboutUsInfo from '../AboutUsInfo';
import HeroSection2 from '../HeroSection2';
import Footer from '../Footer';
import Navbar from '../Navbar';

function AboutUs() {
    return (
      <>
      <Navbar />
        <HeroSection2 />
        <AboutUsInfo />
        <Footer />
      </>
    );
  }
  
  export default AboutUs;
  