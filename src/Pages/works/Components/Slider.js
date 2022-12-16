import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import car from "../../../Components/carousel1/pics/Autoservice.jpg";
import { ModalBody } from "react-bootstrap";

function GridExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="workcont">
      <Row xs={1} md={2} className="g-4">
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" src={car} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={car}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
