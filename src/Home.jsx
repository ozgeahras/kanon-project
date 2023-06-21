import React, { useState } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';
import SearchBox from './SearchBox';
import Card from './Card';

const Home = observer(() => {
  // State variables for filtered data and search query
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  // Handle search input and update filtered data
  const handleSearch = (query) => {
    setQuery(query);
    // Filter data based on search query
    const filtered = dataStore.data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Determine which data to render based on search query
  const renderData = query ? filteredData : dataStore.data;

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      <div className="card-container">
        {renderData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
});

export default Home;
