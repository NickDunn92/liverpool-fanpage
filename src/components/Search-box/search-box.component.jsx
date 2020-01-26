import React from 'react';

export const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        typeof='search'
        placeholder='Search Player'
        onChange={searchChange}
      />
    </div>
  );
};