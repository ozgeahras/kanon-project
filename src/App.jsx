import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import dataStore from './dataStore';
import NavBar from './NavBar';
import GamePage from './GamePage';
import Home from './Home';
import './App.css';

// calling an observer here because we need fetch game data when page loads
const App = observer(() => {
  useEffect(() => {
    dataStore.fetchData(); // Calling the 'fetchData' method from the 'dataStore'
  }, []);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
});

export default App;
