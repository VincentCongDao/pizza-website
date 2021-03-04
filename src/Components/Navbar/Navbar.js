import React from "react";
import { Link } from "react-scroll";
// CSS
import "./CSS/navbar.css";
// Sidebar

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          PizzaLover
        </Link>
        <div className="space-between-empty" />
        <ul className="navigation">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/PizzaMaker">Create Your Pizza</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
