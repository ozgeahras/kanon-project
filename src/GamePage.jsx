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

  // define images that used in gamepage, for first load is kanon gaming icon
  const [img1, setImg1] = useState('icon');
  const [img2, setImg2] = useState('icon');
  const [img3, setImg3] = useState('icon');

  // define the point at 20 for starting new game
  const [points, setPoints] = useState(20);

  // spin button fn.
  const spin = () => {
    // get three random number that matches array's length
    const random1 = Math.floor(Math.random() * reel1.length);
    const random2 = Math.floor(Math.random() * reel2.length);
    const random3 = Math.floor(Math.random() * reel3.length);

    //define the random numbers
    const newImg1 = reel1[random1];
    const newImg2 = reel2[random2];
    const newImg3 = reel3[random3];

    // set random images
    setImg1(newImg1);
    setImg2(newImg2);
    setImg3(newImg3);

    // when spin button is clicked, add an effect for 500 miliseconds, that user can understands its spinned
    const images = document.querySelectorAll('.slot-img');
    images.forEach((image) => {
      image.classList.add('spin-effect');
      setTimeout(() => {
        image.classList.remove('spin-effect');
      }, 500);
    });

    // call the handlePoints for point calculation
    handlePoints(newImg1, newImg2, newImg3);
  };

  const handlePoints = (newImg1, newImg2, newImg3) => {
    // created winmap object for reward points:
    //  3 cherries in a row: 50 coins, 2 cherries in a row: 40 coins
    //  3 Apples in a row: 20 coins, 2 Apples in a row: 10 coins
    //  3 Bananas in a row: 15 coins, 2 Bananas in a row: 5 coins
    //  3 lemons in a row: 3 coins
    const winMap = {
      cherry: { 2: 40, 3: 50 },
      apple: { 2: 10, 3: 20 },
      banana: { 2: 5, 3: 15 },
      lemon: { 2: 0, 3: 3 },
    };

    // win points starts from 0
    let winPoints = 0;

    //for random numbers calculate the points:
    if (newImg1 === newImg2 && newImg2 === newImg3) {
      // Three in a row
      winPoints = winMap[newImg1][3];
    } else if (newImg1 === newImg2) {
      // Two in a row (first and second)
      winPoints = winMap[newImg1][2];
    } else if (newImg2 === newImg3) {
      // Two in a row (second and third)
      winPoints = winMap[newImg2][2];
    }

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
