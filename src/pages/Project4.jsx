import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <SocialNetwork />
        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
