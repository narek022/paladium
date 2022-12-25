import React from "react";
import Header from "./components/header";
import Feedback from "./components/feedback";
import Map from "./components/map";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <title>Contact Us | PaladiumTechServiceLimited </title>
      <Header />
      <div className="contMap">
      <Map />
      </div>
      <div className="contFeedback">
      <Feedback />
      </div>
    </div>
  );
}

export default Contact;
