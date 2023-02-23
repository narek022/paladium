import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import img from "../pics/uav.jpg";
import epo1 from '../pics/epo1.jpeg';
import epo1thumbnail from '../pics/epo1thumbnail.jpeg';
import epo2 from '../pics/epo2.jpeg';
import epo3 from '../pics/epo3.jpeg';
import epo4 from '../pics/epo4.jpeg';
import epo5 from '../pics/epo5.jpeg';
import epo6 from '../pics/epo6.jpeg';
import epo7 from '../pics/epo7.jpeg';
import epo8 from '../pics/epo8.jpeg';
import "./body.css";

function StaffInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  // const [show3, setShow3] = useState(false);
  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);


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


  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);


  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);


  return (
    <>
      <div className="staffcont">
        <Row xs={1} md={2} className="g-4">
          <div className="stinfo">
            <Col>
              <span>
                Our company, being an intermediary company, offers multipurpose
                striking UAV. The system is developed in accordance with
                requirement from modern market and various application
                environment.
              </span>
            </Col>
            <Col className="prodcomp">
              For more information please contact us.
            </Col>
            <Col className="prodcomp">
              The UAV aerial platform uses a highly sophisticated and low cost air
              frame made of foam material and designed as a hand launch system for
              easy operation and maintenance.
            </Col>
            <Col className="prodcomp">Main specifications are:</Col>
            <Col className="prodcomp">Max takeoff weight 7kg</Col>
            <Col>Control range 12km</Col>
            <Col>Warhead 1.5kg</Col>
            <Col>Endurance ≥1h</Col>
            <Col className="prodcomp">
              The UAV can be operated in flexible methods with either vehicle
              integrated launcher or portable catapult and it can effectively
              damage the heavy armored target.
            </Col>
            <Col className="prodcomp">Main specifications are:</Col>
            <Col className="prodcomp">Max range 150km </Col>
            <Col>Max speed 160km/h</Col>
            <Col>Control range 50km</Col>
            <Col>Warhead 8kg</Col>
            <Col>Endurance ≥1.5h</Col>
          </div>
          <div className="stimg">
            <Col>
              <Card>
                <Card.Img className="uavimg1" variant="top" src={img} alt="uavimg1" />
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
                <Card.Img className="pic" variant="top" alt="epo1" src={epo1thumbnail} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img className="modalImg" src={epo1}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" alt="epo2" src={epo2} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body>
                  <img className="modalImg" src={epo2}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow4}>
                <Card.Img className="pic" variant="top" alt="epo3" src={epo3} />
              </button>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Body>
                  <img className="modalImg" src={epo3}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow5}>
                <Card.Img className="pic" variant="top" alt="epo4" src={epo4} />
              </button>
              <Modal show={show5} onHide={handleClose5}>
                <Modal.Body>
                  <img className="modalImg" src={epo4}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow6}>
                <Card.Img className="pic" variant="top" alt="epo5" src={epo5} />
              </button>
              <Modal show={show6} onHide={handleClose6}>
                <Modal.Body>
                  <img className="modalImg" src={epo5}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow7}>
                <Card.Img className="pic" variant="top" alt="epo6" src={epo6} />
              </button>
              <Modal show={show7} onHide={handleClose7}>
                <Modal.Body>
                  <img className="modalImg" src={epo6}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow8}>
                <Card.Img className="pic" variant="top" alt="epo7" src={epo7} />
              </button>
              <Modal show={show8} onHide={handleClose8}>
                <Modal.Body>
                  <img className="modalImg" src={epo7}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow9}>
                <Card.Img className="pic" variant="top" alt="epo8" src={epo8} />
              </button>
              <Modal show={show9} onHide={handleClose9}>
                <Modal.Body>
                  <img className="modalImg" src={epo8}></img>
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