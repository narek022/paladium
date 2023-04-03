import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5117-P/Pictures/IR5117-P.png'

function IR5117PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5117-P Long Range Clip-on or Stand alone Thermal Sight
                            </h4>
                        </Col>
                        <p>
                            <b>
                                Mount on the front side of the original day sight with no interference
                            </b>
                        </p>
                        <h6>
                            Detection
                        </h6>
                        <p className="p-0">
                            ≥2000m (1.7m×0.5m human)
                        </p>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            1500m (1.7m×0.5m human)
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5117-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR5117PDetails;
