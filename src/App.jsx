import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';
import SearchBox from './SearchBox';
import Card from './Card';
import NavBar from './NavBar';
import './App.css';

const App = observer(() => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dataStore.fetchData();
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
    const filtered = dataStore.data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderData = query ? filteredData : dataStore.data;

  return (
    <div className="container">
      <NavBar />
      <SearchBox handleSearch={handleSearch} />
      <div className="card-container">
        {renderData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
});

export default App;
