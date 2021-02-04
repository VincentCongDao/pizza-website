import React from "react";
import  Home  from "../Views/Home";
import  About  from "../Views/About";
import  Contact  from "../Views/Contact";
import  PizzaMaker  from "../Views/PizzaMaker";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";

const RouteNav = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" components={Home}></Route>
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route  path="/About" component={About} />
        <Route  path="/About" component={Contact} />
        <Route  path="/About" component={PizzaMaker} />
      </Switch>
    </div>
  );
};

export default RouteNav