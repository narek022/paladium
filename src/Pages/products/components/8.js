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
            Our company, being an intermediary company, offers thermal optics.
            They can detect radiation or heat given off by any living object.
            Thermal imaging uses a special kind of lens that focuses on infrared
            light and creates a thermogram. This thermogram is then turned into
            electrical impulses that become a picture on your screen.
          </Col>
          <Col className="prodcomp">Specifications:</Col>
          <Col>Lens Diameter (mm), 26</Col>
          <Col>Diopter adjustment, ± 4</Col>
          <Col>IR illuminator built-in, Yes</Col>
          <Col>Optical magnification, fold1</Col>
          <Col>Nutrition, 2xAA</Col>
          <Col>Dimensions, mm130x113x58</Col>
          <Col>Weight, g 420</Col>
          <Col className="prodcomp">For more information please contact us.</Col>
          <Col className="prodcomp">
            Our company, being an intermediary company, offers night vision
            optics. Night vision devices may be passive, relying solely on
            ambient light, or may be active, using an IR (infrared) illuminator
            to better visualize the environment. The devices can be handheld but
            many are head-mounted and attach to helmets.{" "}
          </Col>
          <Col className="prodcomp">
            Our company, being an intermediary company, offers daylight optics
            such as binoculars, monoculars, safety goggles, spotting scopes for
            use within daylight hours.
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