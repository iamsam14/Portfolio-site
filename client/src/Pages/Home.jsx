import React from "react";
import Projects from "../Components/Layers/Projects";
import Intro from "../Components/Layers/Intro";
import ProjectCards from "../Components/Layers/ProjectCards";

const Home = () => {
  return (
    <div className="main-container">
      <main>
        <Intro />
      </main>
      <ProjectCards />
      <Projects />
    </div>
  );
};

export default Home;
