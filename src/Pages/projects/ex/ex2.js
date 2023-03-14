import Header from "./header2";
import "./ex.css";
import "./body.css";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import exhibition21 from '../ex/exespics/exhibition21.jpg';
import exhibition22 from '../ex/exespics/exhibition22.jpg';
import exhibition23 from '../ex/exespics/exhibition23.jpg';
import exhibition24 from '../ex/exespics/exhibition24.jpg';
import exhibition25 from '../ex/exespics/exhibition25.jpg';
import exhibition26 from '../ex/exespics/exhibition26.jpg';
import exhibition27 from '../ex/exespics/exhibition27.jpg';
import exhibition28 from '../ex/exespics/exhibition28.jpg';
import exhibition29 from '../ex/exespics/exhibition29.jpg';

export default function Projects() {

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
    <div className="excont" >
      <Header />
      {/* <Cardlist /> */}
      <p>
        {" "}
        Our company participated in various international exhibitions. One of
        them is ISNR - International Exhibition for National Security and
        Resilience, helded in Abu Dhabi, UAE. ISNR Abu Dhabi is the region’s
        most trusted platform bringing together national & cyber security
        officials, buyers and all supply chain stakeholders from public and
        private sectors, to conduct business, enhance industry leadership and
        showcase innovation to discuss & influence future projects.
      </p>
      <div className="workcont">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow}>
                <Card.Img className="pic" variant="top" alt="exhibition21" src={exhibition21} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition21}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" alt="exhibition22" src={exhibition22} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition22}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic" variant="top" alt="exhibition23" src={exhibition23} />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition23}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow4}>
                <Card.Img className="pic" variant="top" alt="exhibition24" src={exhibition24} />
              </button>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition24}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow5}>
                <Card.Img className="pic" variant="top" alt="exhibition25" src={exhibition25} />
              </button>
              <Modal show={show5} onHide={handleClose5}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition25}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow6}>
                <Card.Img className="pic" variant="top" alt="exhibition26" src={exhibition26} />
              </button>
              <Modal show={show6} onHide={handleClose6}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition26}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow7}>
                <Card.Img className="pic" variant="top" alt="exhibition27" src={exhibition27} />
              </button>
              <Modal show={show7} onHide={handleClose7}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition27}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow8}>
                <Card.Img className="pic" variant="top" alt="exhibition28" src={exhibition28} />
              </button>
              <Modal show={show8} onHide={handleClose8}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition28}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow9}>
                <Card.Img className="pic" variant="top" alt="exhibition29" src={exhibition29} />
              </button>
              <Modal show={show9} onHide={handleClose9}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition29}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
