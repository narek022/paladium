import Header from "./header1";
import "./ex.css";
import "./body.css";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import exhibition11 from '../ex/exespics/exhibition11.jpeg';
import exhibition12 from '../ex/exespics/exhibition12.jpeg';
import exhibition13 from '../ex/exespics/exhibition13.jpeg';
import exhibition14 from '../ex/exespics/exhibition14.jpeg';
import exhibition15 from '../ex/exespics/exhibition15.jpeg';

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

  return (
    <div className="excont">
      <Header />
      <p>
        {" "}
        Our company participated in various international exhibitions. One of
        them is Dubai Airshow helded in Dubai, UAE in 2021. Dubai Airshow 2023
        is one of the biggest aerospace events and plays an instrumental role in
        bringing the industry together to access invaluable market insights and
        business opportunities.
      </p>
      <div className="workcont">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow}>
                <Card.Img className="pic" variant="top" alt="exhibition11" src={exhibition11} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition11}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" alt="exhibition12" src={exhibition12} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition12}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic" variant="top" alt="exhibition13" src={exhibition13} />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition13}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow4}>
                <Card.Img className="pic" variant="top" alt="exhibition14" src={exhibition14} />
              </button>
              <Modal show={show4} onHide={handleClose4}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition14}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow5}>
                <Card.Img className="pic" variant="top" alt="exhibition15" src={exhibition15} />
              </button>
              <Modal show={show5} onHide={handleClose5}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition15}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
