import React from 'react';
import './search-box.styles.scss';

export const SearchBox = ({ searchChange }) => {
  return (
    <div className='search-box'>
      <input
        typeof='search'
        placeholder='Search Player'
        onChange={searchChange}
      />
    </div>
  );
};