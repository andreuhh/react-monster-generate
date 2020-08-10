import React from 'react';

import './search-box.style.css';

// functional component
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);