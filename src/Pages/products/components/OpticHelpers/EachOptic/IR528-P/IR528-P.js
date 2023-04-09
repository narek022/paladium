import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR528-P/Pictures/IR528-P.png'

function IR528PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR528-P Fusion Binocular with uncooled IR and low-lux CMOS
                            </h4>
                        </Col>
                        <p className="p-0">
                            IR:900m (medium sized tank flank)
                            <br />
                            Low-lux: 350m (medium sized tank flank)
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR528-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR528PDetails;
