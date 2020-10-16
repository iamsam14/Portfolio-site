import React from "react";
import Cuenta from "../images/Cuenta.png";
import trivia from "../images/trivia.png";
import "./ProjectCards.scss";

const ProjectCards = () => {
  return (
    <>
      <div className="project-cards container">
        <div className="projectcard">
          <a href="https://cuenta-app-final.herokuapp.com/">
            <img src={Cuenta} className="projectimage" alt="projectimg" />
          </a>
          <h5>Cuenta</h5>
          <p>Heroku | Stripe | QR Scanner | MERN</p>
        </div>
        <div className="projectcard">
          <a href="https://infinite-fortress-16227.herokuapp.com/">
            <img src={trivia} className="projectimage" alt="projectimg" />
          </a>
          <h5>Trivia Game</h5>
          <p>Axios | RESTful API | React | Javascript</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
