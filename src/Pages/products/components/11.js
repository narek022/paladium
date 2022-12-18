import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../../services/components/pics/serv2.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
        <Col className="prodcomp">
            Our company, being an intermediary company, offers night vision
            optics. Night vision devices may be passive, relying solely on
            ambient light, or may be active, using an IR (infrared) illuminator
            to better visualize the environment. The devices can be handheld but
            many are head-mounted and attach to helmets.{" "}
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;