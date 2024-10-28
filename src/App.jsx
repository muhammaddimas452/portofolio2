import React from "react";
import About from "./components/about";
import Accordion from "./components/Accordion";
import Alumni from "./components/Alumni";
import Benefit from "./components/Benefit";
import Bootcamp from "./components/Bootcamp";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Online_Course from "./components/Online_Course";
import "./index.css";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Benefit />
      <Online_Course />
      <Bootcamp />
      <Alumni />
      <Accordion />
      <Join />
      <Footer />
    </>
  );
}

export default App;
