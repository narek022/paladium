import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img from '../IR5120-P/Pictures/IR5120-P.png'

function IR5120PDetails() {
    return (
        <>
            <div className="staffcont">
                <Row xs={1} md={2} className="g-4">
                    <div className="stinfo">
                        <Col>
                            <h4>
                                IR5120-P Dual-band Smart Light Weapon Sight (High-Definition)
                            </h4>
                        </Col>
                        <h6>
                            Recognition: Daysight telescope
                        </h6>
                        <p className="p-0">
                            ≥1500m（1.7m×0.5m human）≥2500m（armored vehicle）
                            <br />
                            Infrared:
                            <br />
                            ≥1200m（1.7m×0.5m human）≥2000m（armored vehicle）
                            <br />
                            LRF effective range: 50m-2500m
                        </p>
                    </div>
                    <div className="stimg">
                        <img
                            src={img}
                            alt="IR5120-P"
                            height={200}
                        />
                    </div>
                </Row>
            </div>
        </>
    );
}

export default IR5120PDetails;