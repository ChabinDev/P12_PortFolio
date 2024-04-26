import React from "react";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
