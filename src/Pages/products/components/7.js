import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/cover2.jpg";
import img2 from "../pics/cover1.jpg"
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Car covers are the smart solution that help your vehicle to stay
              safe from dings, scratches, pollen, insects, and bird droppings.
              Whether used as an emergency backup or an everyday item, the
              benefits of utilizing a quality car cover is hard to exaggerate.
              The lifespan of your vehicle can be enhanced both indoors and
              outdoors by using a car cover, and using one can protect your
              vehicle from damage ranging from dust particle scratches to blunt
              force impact. When made with weatherproof materials, these covers
              can keep a vehicle preserved incredibly well—anywhere. A
              customized vehicle cover is a crucial piece of protection when you
              want to keep your vehicle safe. For more information please
              contact us!
            </span>
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} alt="#" />
              <Card.Img variant="top" src={img} alt="#"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
