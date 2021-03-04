import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero/Hero";
import Pizzalist from "./Pizzalist";

export default function Home() {
  return (
    <div>
      <Hero id="hero" />
      <About id="about" />
      <Pizzalist id="pizza" />
      <Contact id="contact" />
    </div>
  );
}
