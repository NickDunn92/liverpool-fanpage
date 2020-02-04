import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/liverpool-fc-4.svg';
import './header.styles.scss';

export const Header = () => {
  return (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='Logo' />
    </Link>
      <div className='options'>
      <Link className='option' to='/players'>
        Players
      </Link>
      <Link className='option' to='/shop'>
        Shop
      </Link>
    </div>
  </div>
  )
}
 