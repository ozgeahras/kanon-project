import React, { useState } from 'react';
import './GamePage.css';

function GamePage() {
  const reel1 = [
    'cherry',
    'lemon',
    'apple',
    'lemon',
    'banana',
    'banana',
    'lemon',
    'lemon',
  ];
  const reel2 = [
    'lemon',
    'apple',
    'lemon',
    'lemon',
    'cherry',
    'apple',
    'banana',
    'lemon',
  ];
  const reel3 = [
    'lemon',
    'apple',
    'lemon',
    'apple',
    'cherry',
    'lemon',
    'banana',
    'lemon',
  ];

  const [img1, setImg1] = useState('icon');
  const [img2, setImg2] = useState('icon');
  const [img3, setImg3] = useState('icon');

  const [points, setPoints] = useState(20);

  const spin = () => {
    const random1 = Math.floor(Math.random() * reel1.length);
    const random2 = Math.floor(Math.random() * reel2.length);
    const random3 = Math.floor(Math.random() * reel3.length);

    const newImg1 = reel1[random1];
    const newImg2 = reel2[random2];
    const newImg3 = reel3[random3];

    setImg1(newImg1);
    setImg2(newImg2);
    setImg3(newImg3);

    const images = document.querySelectorAll('.slot-img');
    images.forEach((image) => {
      image.classList.add('spin-effect');
      setTimeout(() => {
        image.classList.remove('spin-effect');
      }, 500);
    });

    handlePoints(newImg1, newImg2, newImg3);
  };

  const handlePoints = (newImg1, newImg2, newImg3) => {
    const winMap = {
      cherry: { 2: 40, 3: 50 },
      apple: { 2: 10, 3: 20 },
      banana: { 2: 5, 3: 15 },
      lemon: { 2: 0, 3: 3 },
    };

    let winPoints = 0;

    if (newImg1 === newImg2 && newImg2 === newImg3) {
      // Three in a row
      winPoints = winMap[newImg1][3];
    } else if (newImg1 === newImg2) {
      // Two in a row
      winPoints = winMap[newImg1][2];
    } else if (newImg2 === newImg3) {
      // Two in a row
      winPoints = winMap[newImg2][2];
    }

    console.log('winPoints-->', winPoints);
    const newPoints = points - 1 + winPoints;
    setPoints(newPoints);
  };

  return (
    <>
      <div className="slot-machine">
        <div className="slot">
          <span id="slot1">
            {img1 && (
              <img className="slot-img" src={`./${img1}.png`} alt={img1} />
            )}
          </span>
          <span id="slot2">
            {img2 && (
              <img className="slot-img" src={`./${img2}.png`} alt={`${img2}`} />
            )}
          </span>
          <span id="slot3">
            {img3 && (
              <img className="slot-img" src={`./${img3}.png`} alt={`${img3}`} />
            )}
          </span>
        </div>
        <button className="spin-button" onClick={spin}>
          Spin
        </button>
      </div>

      <span className="point">
        Total Points: <span className="real-point">{points}</span>
      </span>
    </>
  );
}

export default GamePage;
