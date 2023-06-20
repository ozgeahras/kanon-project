import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Play Game</li>
        <li className="navbar-item">Login</li>
      </ul>
    </nav>
  );
}

export default NavBar;
