import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import MineDetector1 from '../MineDetector1/Pictures/MineDetector1.jpg';
import MineDetector2 from '../MineDetector1/Pictures/MineDetector2.jpg';
import MineDetector3 from '../MineDetector1/Pictures/MineDetector3.jpg';

function StaffInfo() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <div className="workcont">
      <div className="helmettext">
        <p>
          <p>
            <b>MINIMUM METAL MINE DETECTOR</b>
          </p>
          <p>
            The METAL MINE DETECTOR is designed to detect very small near-surface metal objects, so-called minimum metal mines or plastic mines. It offers maximum sensitivity and best possible pinpointing of targets while still providing robustness and reliability in any conditions. A ground learning function for operation on uncooperative soil and a military mode that turns off the LED indicators for safe night operations are only two of the vital features available. The METAL MINE DETECTOR comes in a rugged transport case and can be equipped with accessories according to the customer’s needs. Commonly, individual packages are defined and delivered.
          </p>
          <p>
            <b>Characteristics</b>
          </p>
          <p>Dual frequency continuous wave technology for constantly high sensitivity to all metals
            Two integrated search heads (Double D) for precise pinpointing
            Detection along large metal structures like railway tracks, fences and cars
            All control and display elements integrated into the handle
            Visual display with 14 LEDs that can be switched off in Military Mode
            Five sensitivity ranges
            No disturbance by high power lines
            No influence by wet soil or salty water on the detection depth
            Individual ground learning for non cooperative soil conditions
            Integrated function test of all control and display elements incl. malfunction alarm</p>
        </p>
      </div>
      <div className="helmetimg">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow1}>
                <Card.Img className="pic1" variant="top" src={MineDetector1} alt="MineDetector1" />
              </button>
              <Modal show={show1} onHide={handleClose1}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="MineDetector1" src={MineDetector1}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic1" variant="top" src={MineDetector2} alt="MineDetector2" />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="MineDetector2" src={MineDetector2}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic1" variant="top" src={MineDetector3} alt="MineDetector3" />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="MineDetector3" src={MineDetector3}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StaffInfo;
