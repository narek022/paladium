import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5118-P/Pictures/IR5118-P.png'

function IR5118PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5118-P Short Range Thermal Sight
                            </h4>
                        </Col>
                        <h6>
                            Detection
                        </h6>
                        <p className="p-0">
                            ≥800m (1.7m×0.5m human)
                        </p>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            ≥400m (1.7m×0.5m human)
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5118-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR5118PDetails;
