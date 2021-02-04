import React from "react";
import { NavLink } from "react-router-dom";
// CSS
import "./CSS/navbar.css";
// Sidebar

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-logo">PizzaLover</div>
        <div className="space-between-empty"/>
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/PizzaMaker">Create Your Pizza</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
