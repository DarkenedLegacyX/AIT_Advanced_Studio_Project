import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what the app's features and benefits!'</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ReduceWaste.jpg'
              text='Buy according to prediction and waste less products'
              label='Reduce Waste'
              //path='/services'
            />
            <CardItem
              src='images/Ingredient.jpg'
              text='Know how much ingredients you will need on your next order'
              label='Predict Stock'
              //path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Ordering.jpg'
              text='Add daily sales data to improve prediction accuracy through model training'
              label='Prediction Algorithm'
              //path='/services'
            />
            <CardItem
              src='images/Reliability.jpg'
              text='”Honesty is the first chapter in the book of wisdom.” – Thomas Jefferson'
              label='Reliability'
              //path='/products'
            />
            <CardItem
              src='images/Simple.jpg'
              text='Simple and easy to learn'
              label='Easy to Use'
              //path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
