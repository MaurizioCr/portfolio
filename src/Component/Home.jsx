import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Blocco = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <Container className="text-center mt-5">
                <Row>
                    {isVisible && (
                        <div className="bg-secondary " style={{ width: "40rem", height: "30rem" }}>
                            <Col className="text-center pt-5 mt-5">
                                Benvenuto nel mio Portfolio! Mi presento, mi chiamo Maurizio Crispino, ho 19 anni e mi piace programmare!
                            </Col>
                        </div>
                    )}
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button onClick={toggleVisibility}>
                            {isVisible ? "Nascondi" : "Mostra"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blocco;
