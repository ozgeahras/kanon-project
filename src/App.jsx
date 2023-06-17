import { useEffect } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';

const App = observer(() => {
  useEffect(() => {
    dataStore.fetchData();
  }, []);

  return (
    <>
      {dataStore.data.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Provider: {item.providerName}</p>
          {item.thumb && item.thumb.url && (
            <img src={item.thumb.url} alt={item.title} />
          )}
        </div>
      ))}
    </>
  );
});

export default App;
