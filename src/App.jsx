import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projet-1" element={<Project1 />} />
          <Route path="/Projet-2" element={<Project2 />} />
          <Route path="/Projet-3" element={<Project3 />} />
          <Route path="/Projet-4" element={<Project4 />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
