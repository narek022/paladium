import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "./pics/VX-5.png";
import "./body.css";
import Modal from "react-bootstrap/Modal";
import VX5P1 from '../pics/VX5P1.jpeg';
import VX5P2 from '../pics/VX5P2.jpeg';
import VX5P3 from '../pics/VX5P3.jpeg';
import VX5P4 from '../pics/VX5P4.jpeg';

function StaffInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <>
      <div className="staffcont">
        <Row xs={1} md={2} className="g-4">
          <div className="stinfo">
            <Col>Main specifications:</Col>
            <Col>Combat Range: 75 km</Col>
            <Col>Max Range: 150 km</Col>
            <Col>Max Speed: 120 km/h</Col>
            <Col>Max Flight Attitude: 3500 m </Col>
            <Col>CEP: 1.5 m</Col>
          </div>
          <div className="stimg">
            <Col>
              <Card>
                <Card.Img className="robimg" variant="top" src={img} alt="robimg" />
              </Card>
            </Col>
          </div>
        </Row>
      </div>
      <div className="workcont">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow}>
                <Card.Img className="pic" variant="top" alt="VX5P1" src={VX5P1} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img className="modalImg" src={VX5P1}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" alt="VX5P2" src={VX5P2} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body>
                  <img className="modalImg" src={VX5P2}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic" variant="top" alt="VX5P3" src={VX5P3} />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body>
                  <img className="modalImg" src={VX5P3}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow4}>
                <Card.Img className="pic" variant="top" alt="VX5P4" src={VX5P4} />
              </button>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Body>
                  <img className="modalImg" src={VX5P4}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default StaffInfo;