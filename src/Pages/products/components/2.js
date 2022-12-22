import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/helmet1.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Our company, being an intermediary company, offers helmets. The
              helmets have reduced damage impact in the head and neck and
              protects against the most advanced handguns due to ballistic
              aramid structure. The ballistic helmets use the best in the
              business high-performance man-made aramid fiber from Kevlar. For
              more information please contact us.
            </span>
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
