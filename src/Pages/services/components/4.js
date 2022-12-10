import serv1 from "./pics/serv4.jpg"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./serv.css";
import { Row } from "react-bootstrap";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Mechanical engineer, Specialist in Weapons and Accessories Arsen
              dedicated more than 20 years of experience in maintaining
              vehicles, armored vehicles, operating and maintaining a wide
              variety of weaponry. He is specialized in inspecting, storing, and
              maintaining small arms and ammunition. Arsen has worked on a wide
              variety of projects, including maintaining missile defense
              systems, testing body armor and developing conventional weapons.
              Arsen has military educational background and in addition he
              served in army for more than 20 years. Expert in weaponry and
              defense items such as safety goggles, body armors and accessories,
              helmets, optical devices, in applied research, simulation, new
              content development, and validation.
            </span>
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={serv1} />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;