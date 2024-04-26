import React from "react";
import { About } from "../components/About.jsx";
import { Projects } from "../components/Projects.jsx";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact.jsx";
import { Navbar } from "../components/Navbar.jsx";

const Home = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Navbar /> */}
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
