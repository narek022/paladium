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
          <Col>
            Our company, being an intermediary company, offers different type of
            accessories to maximize the potential oh weaponry. All of the
            accessories are designed to enhance accuracy, shooting stability,
            recoil control and carrying convenience.
          </Col>
          <Col>For more information please contact us.</Col>
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
