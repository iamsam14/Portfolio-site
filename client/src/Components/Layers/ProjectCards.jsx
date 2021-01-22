import React from 'react';
import FoodBlog from '../images/food.png';
import Cuenta from '../images/Cuenta.png';
import trivia from '../images/trivia.png';

const ProjectCards = () => {
  return (
    <div className="projectscontainer">
      <div className="projectcard">
        <div className="flexcard">
          <a href="https://my-food-blog.netlify.app">
            <img src={FoodBlog} className="projectimage" alt="projectimg" />
          </a>
          <h5>Food blog</h5>
          <p>MERN | JWebToken | Bootstrap | Netlify</p>
        </div>
      </div>
      <div className="projectcard">
        <div className="flexcard">
          <a href="https://cuenta-app.netlify.app">
            <img src={Cuenta} className="projectimage" alt="projectimg" />
          </a>
          <h5>Cuenta</h5>
          <p>MERN | Stripe | QR Scanner | Bootstrap</p>
        </div>
      </div>
      <div className="projectcard">
        <div className="flexcard">
          <a href="https://infinite-fortress-16227.herokuapp.com/">
            <img src={trivia} className="projectimage" alt="projectimg" />
          </a>
          <h5>Trivia Game</h5>
          <p>Axios | RESTful API | React | Javascript</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
