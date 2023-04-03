import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Go11 from './pics/Go11.jpg';
import Go12 from './pics/Go12.jpg';
import Go13 from './pics/Go13.jpg';

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
          The robot walks alongside its human master within sight of the human,which is much better than the conventional following mode. Besides, the human-machine interaction is both harmonious and safe. No need to worry about the robot since it's right beside you. Capable of helping robot choosing a better route in the complex environment.
          It provides omni-directional and ultra wide-angle video image transmission, which can observe the surrounding and
          terrain of the dog on the app, making the operation within the beyond visual range as simple and convenient as being
          on the scene.
        </p>
      </div>
      <div className="helmetimg">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow1}>
                <Card.Img className="pic1" variant="top" src={Go11} alt="Go11" />
              </button>
              <Modal show={show1} onHide={handleClose1}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="Go11" src={Go11}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic1" variant="top" src={Go12} alt="Go12" />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="Go12" src={Go12}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic1" variant="top" src={Go13} alt="Go13" />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="Go13" src={Go13}></img>
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
