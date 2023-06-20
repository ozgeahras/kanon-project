import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';

function SearchBox({ handleSearch }) {
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
