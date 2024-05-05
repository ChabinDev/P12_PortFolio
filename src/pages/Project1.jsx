import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <SocialNetwork />
        <Buttons left={"/"} right={"/Projet-2"} />
      </div>
    </main>
  );
};
export default Project1;
