import { useEffect } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';
import './App.css';

const App = observer(() => {
  useEffect(() => {
    dataStore.fetchData();
  }, []);

  return (
    <div className="container">
      {dataStore.data.map((item) => (
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
