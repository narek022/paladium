import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom"
import car from "../../../Components/cardList2/pics/car.svg"
import helmetIcon from "../../../Components/cardList2/pics/helmet.svg"
import aiplaneIcon from "../../../Components/cardList2/pics/airplane.svg"
import tractorIcon from "../../../Components/cardList2/pics/tractor.svg"
import sheildIcon from "../../../Components/cardList2/pics/sheild.svg"
import vestIcon from "../../../Components/cardList2/pics/vest.svg"
import coverIcon from "../../../Components/cardList2/pics/cover.svg"
import opticsIcon from "../../../Components/cardList2/pics/optics.svg"
import accessoriesIcon from "../../../Components/cardList2/pics/accessories.svg"
import communicationIcon from "../../../Components/cardList2/pics/communication.svg"
import nightIcon from "../../../Components/cardList2/pics/night.svg";
import thermalIcon from "../../../Components/cardList2/pics/thermal.svg";
import robotIcon from "../../../Components/cardList2/pics/robot.svg";
import "./style.css"

function GridExample() {
  return (
    <div className="prodcont_1">
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
              <Card.Img className="icon" variant="top" src={accessoriesIcon} />
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