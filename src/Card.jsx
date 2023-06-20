import React from 'react';
import './Card.css';

function Card({ item }) {
  if (!item.thumb || !item.thumb.url) {
    return null; // Return null to hide the entire card if image is missing
  }

  return (
    <div className="card">
      <img className="card-image" src={item.thumb.url} alt={item.title} />
      <p className="card-title">{item.title}</p>
    </div>
  );
}

export default Card;
