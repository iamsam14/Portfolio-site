import WaterWave from "react-water-wave";
import React from "react";
import Navbar from "../Navbar";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="water-color">
        {/* <WaterWave
          style={{
            width: "93vw",
            height: "83vh",
            position: "absolute",
            zIndex: "0",
          }}
          pertrubance="1"
        ></WaterWave> */}
        <div className="front">
          <Navbar className="color" />
        </div>
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
    </>
  );
};

export default Intro;
