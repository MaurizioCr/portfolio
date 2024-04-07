import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import styled, { keyframes, css } from "styled-components";
import Home from "./Home";

// Definisco l'animazione per far sparire il container verso sinistra
const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

// Styled component per il container
const StyledContainer = styled.div`
    width: 40rem;
    height: 30rem;
    background-color: #ccc;
    animation: ${props => props.visible ? "" : css`${slideOut} 0.5s ease-out forwards`};
    opacity: ${props => props.visible ? 1 : 0};
    pointer-events: ${props => props.visible ? 'auto' : 'none'};
    transition: opacity 0.5s ease-out;
    overflow: hidden;
`;

const Blocco = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <Container className="text-center mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="text-center pt-5 mt-5">
                        <StyledContainer visible={isVisible}>
                            Benvenuto nel mio Portfolio! Mi presento, mi chiamo Maurizio Crispino, ho 19 anni e mi piace programmare!
                            <div>
                                <Button onClick={toggleVisibility} className="mt-3">
                                    {isVisible ? "Nascondi" : "Mostra"}
                                </Button>
                            </div>
                        </StyledContainer>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blocco;
