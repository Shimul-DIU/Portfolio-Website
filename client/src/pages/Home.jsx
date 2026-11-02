import React from "react";
import Banner from "../components/Banner";

import About from "../components/About";
import Skills from "../components/Skills";

import DevelopmentPopup from "../components/DevelopmentPopup";
import ProjectsComponent from "../components/ProjectsComponent";
import BlogComponent from "../components/BlogComponent";
const Home = () => {
  return (
    <div>

      <DevelopmentPopup></DevelopmentPopup>
      <Banner></Banner>
      <About> </About>
      <Skills></Skills>
      <ProjectsComponent></ProjectsComponent>
      <BlogComponent></BlogComponent>
    </div>
  );
};

export default Home;
