import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "../pics/daylight.jpg";
import img2 from "../pics/day.jpg";
import ToolbarOptics from "./OpticHelpers";
import "./body.css";

function StaffInfo() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="workcont">
        <div className="opttext">
          <p>
            Our company, being an intermediary company, offers daylight optics
            such as binoculars, monoculars, safety goggles, spotting scopes for
            use within daylight hours.
          </p>
        </div>
        <ToolbarOptics />
    </div>
  );
}

export default StaffInfo;