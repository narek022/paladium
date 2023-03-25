import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5211-P/Pictures/IR5211-P.png'

function IR5211PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5211-P Dual-band Smart Light Weapon Sight (High-Definition)
                            </h4>
                        </Col>
                        <h6>
                            Detection
                        </h6>
                        <p className="p-0">
                            DAY: ≥12000m(2.3m×4.6m vehicle)
                            <br />
                            IR: ≥8000m(2.3m×4.6m vehicle)
                        </p>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            DAY: ≥9000m(2.3m×4.6m vehicle)
                            <br />
                            IR: ≥5000m(2.3m×4.6m vehicle)
                            LRF: 80m~ 8000m
                            Integrates IR, day camera, laser range finder, digital magnetic compass, global navigation satellite system (GPS & Beidou) and memory module.
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5211-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR5211PDetails;