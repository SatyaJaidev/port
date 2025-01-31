/*
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    <Chatbot/>
    </>
  );
}

export default App;
*/

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import Project from "./routes/Project";
import Chatbot from "./components/Chatbot"; 
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/chat" element={<Chatbot />} /> 
    </Routes>
  );
}

export default App;


