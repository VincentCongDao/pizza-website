import React from "react";
import { Background, Parallax } from "react-parallax";
import "./Page.css";
export default function About() {
  return (
    <div className="About" id="about">
      <div className="About-information">
        <Parallax
          bgImage="./Hero/Image/pizza-hero.jpg"
          className="About-class"
          bgImageAlt="Pizza"
          strength={300}
          blur={5}
        >
          <Background className="parallax-bg">
            <img
              src="https://images2.alphacoders.com/970/thumb-1920-97040.jpg"
              alt="PizzaParallax"
            />
          </Background>
          <div className="about-us">
            <div className="about-us-container">
              <h3>About Us</h3>
              <p>
                Veniam nulla nulla do anim voluptate qui magna occaecat
                exercitation dolore. Consectetur commodo aute enim incididunt
                qui fugiat ullamco est adipisicing proident ex laboris labore
                nostrud. Magna esse ipsum qui est proident sunt velit non duis
                magna. Veniam nisi esse reprehenderit commodo tempor cupidatat
                deserunt consectetur aute ullamco commodo sunt nulla non.
                Pariatur nisi irure commodo cupidatat labore aute veniam mollit
                occaecat nisi ad nisi amet.
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
