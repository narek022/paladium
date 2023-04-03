import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5115-P/Pictures/IR5115-P.png'

function IR5115PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5115-P Long range Thermal Sight (High-Definition)
                            </h4>
                        </Col>
                        <h6>
                            Detection
                        </h6>
                        <p className="p-0">
                            ≥1200m (1.7m×0.5m human)
                        </p>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            ≥1000m (1.7m×0.5m human)
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5115-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR5115PDetails;
