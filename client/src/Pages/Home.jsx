import React from 'react';
import Projects from '../Components/Layers/Projects';
import Intro from '../Components/Layers/Intro';
import ProjectCards from '../Components/Layers/ProjectCards';

const Home = () => {
  return (
    <>
      <main>
        <Intro />
      </main>
      <ProjectCards />
      <Projects />
    </>
  );
};

export default Home;
