import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
// import components
import Nav from "./components/Nav";
import Hero from "./components/hero";
import Skills from "./components/skills";
import About from "./components/about";
import useScrollReveal from "./hooks/useScrollReveal";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Wire up scroll-reveal for every [data-reveal] element in the whole app
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Router>
        <Nav scrolled={scrolled} />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}
