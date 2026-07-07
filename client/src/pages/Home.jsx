import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About_me from "./About_me";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About_me> </About_me>
    </div>
  );
};

export default Home;
