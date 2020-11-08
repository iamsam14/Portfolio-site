import React from 'react';
import WaterWave from 'react-water-wave';
import NavigationBar from '../NavigationBar';

const Intro = () => {
  let waterHeight;
  waterHeight =
    window.innerWidth >= 1299
      ? '675px'
      : window.innerWidth < 1299 && window.innerWidth >= 1019
      ? '800px'
      : window.innerWidth < 1019 && window.innerWidth >= 674
      ? '879px'
      : window.innerWidth < 674 && window.innerWidth >= 652
      ? '921px'
      : window.innerWidth < 652 && window.innerWidth >= 537
      ? '1041px'
      : window.innerWidth < 537 && window.innerWidth >= 526
      ? '1162px'
      : window.innerWidth < 526
      ? '1244px'
      : '675px';
  const func = () => {
    // heigth at 675 for width 1298
    // height at 800 for width 1299 - 1019
    // height at 879 for width 1018 - 674
    // height at 921 for width 674 - 652
    // height at 1041 for width 652 - 537
    // height at 1162 for width 536 - 524
    // height at 1162 for width 523
  };
  return (
    <div className="water-color">
      <NavigationBar className="color" />
      <WaterWave
        style={{ minHeight: waterHeight, width: '100%', position: 'absolute' }}
      />
      <div className="intro color">
        <div className="color" id="waterCanvas">
          <h3>Hello World, I'm Samuel!</h3>
          <p className="description">
            I am a Junior Web Developer. I take pride in my ability to
            comprehend complex concepts and implement them in my code.
          </p>
          <p>
            MERN | Javascript | HTML | CSS | Sass | Bootstrap | JSON | RESTful
            API's
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
