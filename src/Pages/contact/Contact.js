import React from "react";
import Header from "./components/header";
import Feedback from "./components/feedback";
import Map from "./components/map";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

function Contact() {
  return (
    <div>
      <title>Contact Us | PaladiumTechServiceLimited </title>
      <Header />
      <Row xs={1} md={2} className="g-4">
        <Col className="col2">
          <Card>
            <Card.Body>
              <div className="contacts">
                <Feedback />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col2">
          <Card>
            <Card.Body>
              <div className="contacts">
                <Map />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
