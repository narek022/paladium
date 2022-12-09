import React from "react";
import Header from "./components/header"
import Feedback from "./components/feedback"
import Map from "./components/map"


function Contact () {
    return (
        <div>
            <title>Contact Us | PaladiumTechServiceLimited </title>
            <Header />
            <div className="contacts">
            <Feedback />
            {/* <Map /> */}
            </div>
        </div>
    )
}

export default Contact;