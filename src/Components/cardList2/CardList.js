import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import car from "./pics/car.svg";
import helmetIcon from "./pics/helmet.svg"
import aiplaneIcon from "./pics/airplane.svg"
import tractorIcon from "./pics/tractor.svg"
import sheildIcon from "./pics/sheild.svg"
import vestIcon from "./pics/vest.svg"
import coverIcon from "./pics/cover.svg"
import opticsIcon from "./pics/optics.svg"
import "./style3.css";

function GridExample() {
  return (
    <div className="cont">
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card >
            <Card.Img className="icon" variant="top" src={car} />
            <Card.Body>
              <Card.Title>Auto Spare Parts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={helmetIcon} />
            <Card.Body>
              <Card.Title>Helmets</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={aiplaneIcon} />
            <Card.Body>
              <Card.Title>UAV</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={tractorIcon} />
            <Card.Body>
              <Card.Title>Tracked Vehicles Spare Parts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={sheildIcon} />
            <Card.Body>
              <Card.Title>Armor Plate</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={vestIcon} />
            <Card.Body>
              <Card.Title>Bulletprof Vest</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={coverIcon} />
            <Card.Body>
              <Card.Title>Cover</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={opticsIcon} />
            <Card.Body>
              <Card.Title>Optics</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
