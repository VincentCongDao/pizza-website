import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero/Hero";
import PizzaSvg from "./Hero/svg/pizza.js";
import Pizzalist from "./Pizzalist";
import { Parallax, Background } from "react-parallax";
export default function Home() {
  return (
    <div>
      <Hero id="hero" />
      <div className="content-container">
        <Parallax
          className="About-class"
          bgImageAlt="Pizza"
          strength={500}
          blur={5}
        >
          <Background>
            <PizzaSvg />
          </Background>
        </Parallax>
        <About id="about" />
        <Pizzalist id="pizza" />
        <Contact id="contact" />
      </div>
    </div>
  );
}
