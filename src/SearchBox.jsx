import React from 'react';

function SearchBox({ handleSearch }) {
  const handleInputChange = (event) => {
    const query = event.target.value;
    handleSearch(query);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Search..." />
    </div>
  );
}

export default SearchBox;
