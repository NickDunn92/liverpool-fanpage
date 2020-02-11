import React from 'react';
import { SignIn } from '../../components';
import './homepage.styles.scss';

export const HomePage = () => {
  return ( 
    <div className='homepage'>   
      <SignIn />
    </div>
  );
}