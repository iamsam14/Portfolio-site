import React from 'react';
import NavigationBar from '../NavigationBar';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="water-color">
      <NavigationBar className="color" />
      <div className="intro color">
        <div className="color" id="waterCanvas0">
          <h3>Hello World, I'm Samuel!</h3>
          <p className="description">
            I am a Junior Web Developer. I take pride in my ability to
            comprehend complex concepts and implement them in my code.
          </p>
          <p>React | Javascript | HTML | CSS | Sass | Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
