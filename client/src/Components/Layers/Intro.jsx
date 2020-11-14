import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import NavigationBar from '../NavigationBar';

const Intro = () => {
  return (
    <div className="water-color">
      <NavigationBar className="color" />
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
