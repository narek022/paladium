import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img1 from "./pics/rob1.jpg";
import img2 from "./pics/rob2.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="robotscont">
      <div>
        <p>
          Our company, being an intermediary company, offers multifunctional
          robots. They are small an medium-sized multipurpose robots with
          multi-perspective functions. The robots are strong and light in
          structure and also meets the requirements of specific standards such
          as dustproof, waterproof and anticorrosion. For more information
          please contact us.
        </p>
      </div>
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Card.Text>
            <Col>
              JP-R30 portable reconnaissance robot is the latest generation of
              reconnaissance robot with built-in image sensor, audio collector,
              infrared lamp module, accelerometer, etc. It can effectively
              collect environmental information, realize remote visual combat
              command and day-night reconnaissance operations, with high
              reliability and strong practicality.
            </Col>
            <Col>Technical specifications are:</Col>
            <Col>Size: 280×270×115mm</Col>
            <Col>Weight: ≤3.2kg</Col>
            <Col>Maximum vertical drop height: ≥5 m</Col>
            <Col>Maximum obstacle height: ≥100mm</Col>
            <Col>Visual remote control distance: ≥500m</Col>
            <Col>Continuous and stable maximum driving speed: ≥2m/s</Col>
            <Col>Night vision distance (clear sky without moon) : ≥40m</Col>
            <Col>Continuous working hours: ≥ 2h</Col>
            <Col>Operating temperature: -40℃ ~ +55℃</Col>
            <Col>Protection grade: ≥IP67</Col>
          </Card.Text>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
            </Card>
          </Col>
        </div>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Card.Text>
            <Col>
              JP-REOD400 is a small and medium-sized multipurpose robot with
              two-handed claw design. It has small size, weights only 37kg, and
              belongs to the small multi-purpose robot. While its operation
              capacity has reached the standard of medium multipurpose robot,
              and the maximum grasping weight is up to 16KG.
            </Col>
            <Col>Technical specifications are:</Col>
            <Col>Size≤830mm×600mm×460mm</Col>
            <Col>Weight≤ 37kg</Col>
            <Col>Speed≥ 1.7m/s</Col>
            <Col>Verticle obstacle clearing capability：400mm</Col>
            <Col>Grabbing properties:6-16kg</Col>
            <Col>Control distance:500m</Col>
            <Col>Protection grade:IP66</Col>
          </Card.Text>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
