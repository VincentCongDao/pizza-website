import React from "react";
import { Link } from "react-router-dom";
// CSS
import "./CSS/navbar.css";
export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          PizzaLover
        </Link>
        <div className="space-between-empty" />
        <nav>
          <ul className="navigation">
            <li>
              <Link activeClass="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="/pizzamaker">
                Custom Your Own Pizza
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
