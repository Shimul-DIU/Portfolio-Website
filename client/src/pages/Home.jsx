import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About> </About>
      <Skills></Skills>
    </div>
  );
};

export default Home;
