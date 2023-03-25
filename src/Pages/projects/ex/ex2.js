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
import exhibition210 from '../ex/exespics/exhibition210.jpg';
import exhibition211 from '../ex/exespics/exhibition211.jpg';
import exhibition212 from '../ex/exespics/exhibition212.jpg';
import exhibition213 from '../ex/exespics/exhibition213.jpg';
import exhibition214 from '../ex/exespics/exhibition214.jpg';

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

  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10= () => setShow10(true);

  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);

  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);

  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  return (
    <div className="excont" >
      <Header />
      {/* <Cardlist /> */}
      <p>
        {" "}
        Our company participated in various international exhibitions. One of them is IDEX and NAVDEX 2023 - International Defense Exhibition for companies in defense industry, governments, armed forces and military personnell, held in Abu Dhabi, UAE. IDEX is the region’s most trusted platform bringing together national & cyber security officials, buyers and all supply chain stakeholders from public and private sectors, to conduct business, enhance industry leadership and showcase innovation to discuss & influence future projects.
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
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow10}>
                <Card.Img className="pic" variant="top" alt="exhibition210" src={exhibition210} />
              </button>
              <Modal show={show10} onHide={handleClose10}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition210}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow11}>
                <Card.Img className="pic" variant="top" alt="exhibition211" src={exhibition211} />
              </button>
              <Modal show={show11} onHide={handleClose11}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition211}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow12}>
                <Card.Img className="pic" variant="top" alt="exhibition212" src={exhibition212} />
              </button>
              <Modal show={show12} onHide={handleClose12}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition212}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow13}>
                <Card.Img className="pic" variant="top" alt="exhibition213" src={exhibition213} />
              </button>
              <Modal show={show13} onHide={handleClose13}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition213}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide">
            <Card>
              <button className="btn" onClick={handleShow14}>
                <Card.Img className="pic" variant="top" alt="exhibition214" src={exhibition214} />
              </button>
              <Modal show={show14} onHide={exhibition214}>
                <Modal.Body>
                  <img className="modalImg" src={exhibition214}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
