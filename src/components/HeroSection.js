import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/test1.mp4' autoPlay loop muted />
      <h1>Stock BOT</h1>
      <p>Automatize your stock order...</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign Up!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
