import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ReduceWaste.jpg'
              text='Milk'
              
              //path='/services'
            />
            <CardItem
              src='images/Ingredient.jpg'
              text='Cookie'
            
              //path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
