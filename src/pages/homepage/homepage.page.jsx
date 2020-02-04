import React from 'react';
import { SignIn } from '../../components';
import './homepage.styles.scss';

export const HomePage = () => {
  return ( 
    <div className='homepage'>
      <h1>Liverpool FC</h1>      
      <img 
        className='image'
        src='https://i2-prod.liverpoolecho.co.uk/incoming/article17599491.ece/ALTERNATES/s615/1_GettyImages-1200682777.jpg'
        alt='liverpool team'
      />
      <SignIn />
    </div>
  );
}