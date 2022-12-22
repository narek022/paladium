import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/uav.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont1">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Our company, being an intermediary company, offers multipurpose
              striking UAV. The system is developed in accordance with
              requirement from modern market and various application
              environment.
            </span>
          </Col>
          <Col className="prodcomp">For more information please contact us.</Col>
          <Col className="prodcomp">
            The UAV aerial platform uses a highly sophisticated and low cost air
            frame made of foam material and designed as a hand launch system for
            easy operation and maintenance.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max takeoff weight 7kg</Col>
          <Col>Control range 12km</Col>
          <Col>Warhead 1.5kg</Col>
          <Col>Endurance ≥1h</Col>
          <Col className="prodcomp">
            The UAV can be operated in flexible methods with either vehicle
            integrated launcher or portable catapult and it can effectively
            damage the heavy armored target.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range 150km </Col>
          <Col>Max speed 160km/h</Col>
          <Col>Control range 50km</Col>
          <Col>Warhead 8kg</Col>
          <Col>Endurance ≥1.5h</Col>
          <Col className="prodcomp">
            Our company, being an intermediary company, offers multipurpose
            reconnaissance UAV. The system is developed in accordance with
            modern market and various application environment.
          </Col>
          <Col className="prodcomp">For more information please contact us.</Col>
          <Col className="prodcomp">
            The conventional layout of single rotor helicopter with tail rotor
            is adopted for UAV. UAV has two side mounting points for mounting
            task, and photoelectric pod is set at the lower part of the nose in
            which the camera can be hung. . All navigation, flight control and
            system monitoring tasks of UAV can be completed in the flight
            control module.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range 150km</Col>
          <Col>Max speed 120km/h</Col>
          <Col>Range 75km</Col>
          <Col>Maximal height 3500m</Col>
          <Col>For more information please contact us.</Col>
          <Col className="prodcomp">
            The UAV can be operated in flexible methods with either vehicle
            integrated launcher or portable catapult. The system also can carry
            various payloads for emergency relief, aerial mapping, disaster
            surveillance and evaluation, forest fire prevention, urban
            firefight, land and resources survey.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range	250km</Col>
          <Col>Max speed	160km/h</Col>
          <Col>Endurance	≥2.5h</Col>
          <Col>Control range   80km</Col>
        </div>
        <div className="stimg">
          <Col className="uavcol">
            <Card className="uavimg">
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
