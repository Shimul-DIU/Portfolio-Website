import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DevelopmentPopup from "../components/DevelopmentPopup";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DevelopmentPopup></DevelopmentPopup>
      <Banner></Banner>
      <About> </About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
