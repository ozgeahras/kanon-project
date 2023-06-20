import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import dataStore from './dataStore';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './GamePage';
import Home from './Home';
import './App.css';

const App = observer(() => {
  useEffect(() => {
    dataStore.fetchData();
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
