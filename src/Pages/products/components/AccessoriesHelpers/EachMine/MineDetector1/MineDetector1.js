import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5116-P/Pictures/IR5116-P.png'

function MineDetector1() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5116-P Digital Night Vision Sight
                            </h4>
                        </Col>
                        <h6>
                            Recognition:
                        </h6>
                        <p className="p-0">
                            ≥300m (1.7m×0.5m human)
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5116-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default MineDetector1;
