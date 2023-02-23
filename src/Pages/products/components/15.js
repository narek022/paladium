import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from "../pics/uav2.jpg";
import Modal from "react-bootstrap/Modal";
import rig1 from '../pics/Rig1.jpeg';
import rig2 from '../pics/Rig2.jpeg';
import rig3 from '../pics/Rig3.jpeg';
import rig4 from '../pics/Rig4.jpeg';
import rig5 from '../pics/Rig5.jpeg';
import rig6 from '../pics/Rig6.jpeg';

function StaffInfo() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  return (
    <>
      <div className="staffcont">
        <Row xs={1} md={2} className="g-4">
          <div className="stinfo">
            <Col className="prodcomp">
              Our company, being an intermediary company, offers multipurpose
              reconnaissance UAV. The system is developed in accordance with
              modern market and various application environment.
            </Col>
            <Col className="prodcomp">
              For more information please contact us.
            </Col>
            <Col className="prodcomp">
              The conventional layout of single rotor helicopter with tail rotor
              is adopted for UAV. UAV has two side mounting points for mounting
              task, and photoelectric pod is set at the lower part of the nose
              in which the camera can be hung. . All navigation, flight control
              and system monitoring tasks of UAV can be completed in the flight
              control module.
            </Col>
            <Col className="prodcomp">Main specifications are:</Col>
            <Col className="prodcomp">Max range 150km</Col>
            <Col>Max speed 120km/h</Col>
            <Col>Range 75km</Col>
            <Col>Maximal height 3500m</Col>
            <Col>For more information please contact us.</Col>
            <Col className="prodcomp">
              The UAV can be operated in flexible methods with either vehicle
              integrated launcher or portable catapult. The system also can carry
              various payloads for emergency relief, aerial mapping, disaster
              surveillance and evaluation, forest fire prevention, urban
              firefight, land and resources survey.
            </Col>
            <Col className="prodcomp">Main specifications are:</Col>
            <Col className="prodcomp">Max range 250km</Col>
            <Col>Max speed 160km/h</Col>
            <Col>Endurance ≥2.5h</Col>
            <Col>Control range 80km</Col>
          </div>
          <div className="stimg">
            <Col>
              <Card>
                <Card.Img className="uavimg1" variant="top" src={img} alt="#" />
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
                <Card.Img className="pic" variant="top" alt="rig1" src={rig1} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img className="modalImg" src={rig1} alt="rig1"></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" alt="rig2" src={rig2} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body>
                  <img className="modalImg" src={rig2} alt="rig2"></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow4}>
                <Card.Img className="pic" variant="top" alt="rig3" src={rig3} />
              </button>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Body>
                  <img className="modalImg" src={rig3} alt="rig3"></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow5}>
                <Card.Img className="pic" variant="top" alt="rig4" src={rig4} />
              </button>
              <Modal show={show5} onHide={handleClose5}>
                <Modal.Body>
                  <img className="modalImg" src={rig4} alt="rig4"></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow6}>
                <Card.Img className="pic" variant="top" alt="rig5" src={rig5} />
              </button>
              <Modal show={show6} onHide={handleClose6}>
                <Modal.Body>
                  <img className="modalImg" src={rig5} alt="rig5"></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow7}>
                <Card.Img className="pic" variant="top" alt="rig6" src={rig6} />
              </button>
              <Modal show={show7} onHide={handleClose7}>
                <Modal.Body>
                  <img className="modalImg" src={rig6} alt="rig6"></img>
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