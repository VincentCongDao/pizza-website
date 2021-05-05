import React from "react";
import "./Hero.css";
import Heroimage from "./Image/pizza-hero.jpg";

export default function Hero() {
  return (
    <div className="Hero-container" id="hero">
      <img className="hero-image" src={Heroimage} alt="Pizza Background" />
      <div className="hero-information">
        <h3>PizzaLover</h3>
        <p>One Stop For Pizza</p>
      </div>
    </div>
  );
}
