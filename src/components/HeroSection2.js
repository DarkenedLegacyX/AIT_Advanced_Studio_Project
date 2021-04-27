import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/test3.mp4' autoPlay loop muted />
      <h1>About Us</h1>
    </div>
  );
}

export default HeroSection;
