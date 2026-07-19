import React from "react";
import Banner from "../components/Banner";

import About from "../components/About";
import Skills from "../components/Skills";

import DevelopmentPopup from "../components/DevelopmentPopup";
import Projects from './Projects';

const Home = () => {
  return (
    <div>

      <DevelopmentPopup></DevelopmentPopup>
      <Banner></Banner>
      <About> </About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
