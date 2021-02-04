import React from "react";
import data from "../../data.json";
import "./Page.css";
export default function Pizzalist() {
  return (
    <div className="pizzalist-wrapper">
      <h1>Our Pizza</h1>
      <div className="pizzalist">
        {data.Pizzalist.map((Pizzalist) => {
          return (
            <div className="pizza-container" key={Pizzalist}>
              <h4 className="Pizza-title">{Pizzalist.title}</h4>
              <img
                className="Pizza-image"
                src={Pizzalist.image}
                alt={Pizzalist.alt}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
