import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/daylight.jpg";
import img2 from "../pics/day.jpg";


import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col className="prodcomp">
            Our company, being an intermediary company, offers daylight optics
            such as binoculars, monoculars, safety goggles, spotting scopes for
            use within daylight hours.
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img} alt="#"/>
              <Card.Img variant="top" src={img2} alt="#"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;