import React from "react";
import Banner from "../components/Banner";

import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DevelopmentPopup from "../components/DevelopmentPopup";

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
