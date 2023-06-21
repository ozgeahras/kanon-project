import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';

function SearchBox({ handleSearch }) {
  // Handle input change and pass the query to the parent component
  const handleInputChange = (event) => {
    const query = event.target.value;
    handleSearch(query);
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-wrapper">
        <input
          className="searchbox-input"
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <div className="searchbox-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
