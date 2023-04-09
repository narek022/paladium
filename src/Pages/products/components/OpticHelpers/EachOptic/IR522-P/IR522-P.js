import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR522-P/Pictures/IR522-P.png'

function IR522PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR522-P Dual-Channel Uncooled Day/Night Surveillance & Location Targeting Binocular (High-Definition)
                            </h4>
                        </Col>
                        <h6>
                            Detection
                        </h6>
                        <p className="p-0">
                            DAY: ≥5000m (2.3m×4.6m vehicle)

                            <br />
                            IR: ≥5000m (2.3m×4.6m vehicle)
                        </p>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            IR:  ≥2000m (2.3m×4.6m vehicle)
                            <br />
                            LRF: 30m~ 6000m
                            <br /><br />
                            Integrates IR, day camera, laser range finder, digital magnetic compass, global navigation satellite system (GPS & Beidou) and memory module.
                            <br /><br />
                            &#10003; Image stabilization/enhancement: compiled.
                            <br />
                            &#10003; Can be used as a standalone hand-held unit with integrated binocular eyepiece.
                            <br />
                            &#10003; It can be mounted on a designated high-precision non-magnetic tripod set.
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR522-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR522PDetails;