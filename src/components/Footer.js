import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/Services'>
              <h2>Services</h2>
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <Link to='/Login'>
              <h2>Login</h2>
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/sign-up'>
              <h2>Sign Up</h2>
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              StockBot
            </Link>
          </div>
          <small class='website-rights'>StockBot © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
