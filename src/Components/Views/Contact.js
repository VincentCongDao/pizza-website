import React from "react";
import "./Page.css";
import contactImage from "./Hero/Image/pizza-contact.jpg";
export default class Contact extends React.Component {
  render() {
    return (
      <form className="contact-form" id="contact">
        <h3>Contact Us</h3>
        <div className="contact-wrapper">
          <div className="pizza-image">
            <img src={contactImage} alt="pizza" />
          </div>
          <div className="Contact">
            <select value="Pizza">
              <option value="Issue">Issue with the pizza</option>
              <option value="Pizza">About the pizza</option>
              <option value="Company">About the company</option>
            </select>
            <input className="name" placeholder="Please Enter Your Name" />
            <input className="name" placeholder="Please Enter Your Email" />
            <input className="name" placeholder="Please Enter Your Message" />
          </div>
        </div>
      </form>
    );
  }
}
