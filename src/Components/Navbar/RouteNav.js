import React from "react";
import Home from "../Views/Home";
import PizzaMaker from "../Views/PizzaMaker";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../Views/About";
import Contact from "../Views/Contact";

const RouteNav = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pizzamaker">
          <PizzaMaker />
        </Route>
      </Switch>
    </>
  );
};

export default RouteNav;
