import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./body.css";
import armen from "../../about/components/pics/armen-koghq1.jpg"
import arsen from "../../about/components/pics/arsen-koghq.jpg";
import ashot from "../../about/components/pics/ashot-koghq1.jpg";
import karen from "../../about/components/pics/karen-koghq.jpg";

function GridExample() {
  return (
    <div>
      <div className="abb2">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={arsen} />
              <Card.Body>
                <Card.Title><NavLink href="/ArsenHovsepyan">ARSEN HOVSEPYAN</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={armen} />
              <Card.Body>
                <Card.Title><NavLink href="/ArmenKhachatryan">ARMEN KHACHATRYAN</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={ashot} />
              <Card.Body>
                <Card.Title><NavLink href="/AshotGevorgyan">ASHOT GEVORGYAN</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={karen} />
              <Card.Body>
                <Card.Title><NavLink href="/KarenGrigoryan">KAREN GRIGORYAN</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;