import React, { useEffect, useState } from 'react';
import WaterWave from 'react-water-wave';
import NavigationBar from '../NavigationBar';

const Intro = () => {
  const [compHeight, setCompHeight] = useState('675px');
  useEffect(() => {
    window.innerWidth >= 1299
      ? setCompHeight('675px')
      : window.innerWidth < 1299 && window.innerWidth >= 1019
      ? setCompHeight('800px')
      : window.innerWidth < 1019 && window.innerWidth >= 674
      ? setCompHeight('879px')
      : window.innerWidth < 674 && window.innerWidth >= 652
      ? setCompHeight('921px')
      : window.innerWidth < 652 && window.innerWidth >= 537
      ? setCompHeight('1041px')
      : window.innerWidth < 537 && window.innerWidth >= 526
      ? setCompHeight('1162px')
      : window.innerWidth < 526
      ? setCompHeight('1244px')
      : setCompHeight('675px');
  }, [window.innerWidth]);
  return (
    <div className="water-color">
      <NavigationBar className="color" />
      <WaterWave
        style={{ minHeight: compHeight, width: '100%', position: 'absolute' }}
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
