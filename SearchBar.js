import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" /> Only show products in stock
      </p>
    </div>
  );
}

export default SearchBar;
