import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import car from "./pics/car.svg";
import helmetIcon from "./pics/helmet.svg";
import aiplaneIcon from "./pics/airplane.svg";
import tractorIcon from "./pics/tractor.svg";
import sheildIcon from "./pics/sheild.svg";
import vestIcon from "./pics/vest.svg";
import coverIcon from "./pics/cover.svg";
import opticsIcon from "./pics/optics.svg";
import accessoriesIcon from "./pics/accessories.svg";
import communicationIcon from "./pics/communication.svg";
import nightIcon from "./pics/night.svg";
import thermalIcon from "./pics/thermal.svg";
import robotIcon from "./pics/robot.svg";
import "./style3.css";

function GridExample() {
  return (
    <div className="prodcont1111">
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={car} />
            <Card.Body>
              <Card.Title>
                <Link to="/AutoSpareParts">Auto Spare Parts</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={aiplaneIcon} />
            <Card.Body>
              <Card.Title>
                <Link to="/UAV">UAV</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={tractorIcon} />
            <Card.Body>
              <Card.Title>
                <Link to="/TrackedVehiclesSpareParts">
                  Tracked Vehicles Spare Parts
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={coverIcon} />
            <Card.Body>
              <Card.Title>
                <Link to="/Cover">Cover</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={communicationIcon} />
            <Card.Body>
              <Card.Title>
                <Link to="/Communication">Communication</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" src={robotIcon} />
            <Card.Body>
              <Card.Title>
                <Link to="/Robots">Robots</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="weaponry">
        <div className="h3">
          <h3>Weaponry</h3>
        </div>
        <div className="g-3">
          <Row xs={1} md={2} className="g-4">
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" src={helmetIcon} />
                <Card.Body>
                  <Card.Title>
                    <Link to="/Helmets">Helmets</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
                  src={accessoriesIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <Link to="/Accessories">Accessories</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" src={sheildIcon} />
                <Card.Body>
                  <Card.Title>
                    <Link to="/ArmorPlates">Armor Plates</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" src={vestIcon} />
                <Card.Body>
                  <Card.Title>
                    <Link to="/BulletprofVest">Bulletprof Vest</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="optics">
        <div className="h3">
          <h3>Optics</h3>
        </div>
        <Row xs={1} md={2} className="g-4">
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" src={opticsIcon} />
              <Card.Body>
                <Card.Title>
                  <Link to="/Optics">Daylight Optics</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" src={nightIcon} />
              <Card.Body>
                <Card.Title>
                  <Link to="/NightVision">Night Vision Optics</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" src={thermalIcon} />
              <Card.Body>
                <Card.Title>
                  <Link to="/ThermalVision">Thermal Vision Optics</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
