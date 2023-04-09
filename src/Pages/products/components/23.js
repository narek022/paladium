import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from './pics/AlienGo1.jpg'
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            The robot can analyze and calculate the two-dimensional skeleton information of
            the human body according to the color information from the perspective, and
            further analyze and c alculate the thr ee-dimensional skeleton information and
            motion information of a specific character using depths of field.
            The color camera can identify the specific posture of the person according to the
            deep learning model, and conduct human-machine interaction. The robot can make
            corresponding movements according to different body postures.
            From the perspective of the robot, artificial intelligence algorithm is used to automatically
            conduct face recognition and crowd classification, and it c an identify
            gender, age and outfits.
            The robot can maintain a high loop-back accuracy in a wide range of fields, a high
            positioning accuracy within a c ertain range, and can maintain stability within a
            certain oscillation amplitude, with drift or loss.
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img className="robimg" variant="top" src={img} alt="AlienGo" />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;