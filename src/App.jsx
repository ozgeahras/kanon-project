import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';
import './App.css';
import SearchBox from './SearchBox';

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
      <SearchBox handleSearch={handleSearch} />
      {renderData.map((item) => (
        <div key={item.id} className="card">
          <p>Title: {item.title}</p>
          <p>Provider: {item.providerName}</p>
          {item.thumb && item.thumb.url && (
            <img src={item.thumb.url} alt={item.title} />
          )}
        </div>
      ))}
    </div>
  );
});

export default App;
