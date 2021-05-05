import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Base from "./Custom/Base";
import Order from "./Custom/Order";
import Toppings from "./Custom/Topping";
import PizzaCustom from "./Custom/PizzaCustom";
import "../Views/Custom/Custom.css";
const PizzaMaker = () => {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item != topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path="/">
          <PizzaCustom />
        </Route>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
      </Switch>
    </>
  );
};

export default PizzaMaker;
