import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Blocco from "./Blocco";
import styled, { keyframes, css } from "styled-components";
import foto from "../Assets/IMG_8265.jpg";
import js from "../Assets/js.png";
import react from "../Assets/react.png";

// Styled component per il container sovrapposto
const OverlayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* sfondo semi-trasparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Assicura che il container sia sopra tutti gli altri elementi */
`;

// Styled component per il contenuto del container sovrapposto
const OverlayContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const Home = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    // Funzione per chiudere il container sovrapposto
    const closeOverlay = () => {
        setShowOverlay(false);
    };

    // Apre il container sovrapposto al caricamento della pagina
    useEffect(() => {
        setShowOverlay(true);
    }, []);

    return(
        <>
            {/* Testo principale */}
            <Container className="mt-5">
                <Row>
                    <Col className="col-12 col-md-6">
                    
                        <img src={foto} width={100 + "%"} height={100 + "%"}/>
                        
                    </Col>
                    <Col className="col-12 col-md-6">
                        Sono una ragazzo di 19 anni a cui piace programmare siti web, sono appassionato al mondo della tecnologia.
                        Inoltre mi piace anche viaggiare e provare cose nuove.
                        <br/>
                        Mi sono diplomato presso l'istituto tecnico informatico F. Giordani
                        2018-2023
                        Dal punto di vista pratico ho imparato ad utilizzare HTML, C, C++, Java, Cisco.
                        Per quanto riguardo il lato teorico, abbiamo visto cose come risposte REST, crittografia, database
                        <br/><br/>

                        Ho imparato a programmare web app, lato front end con react e bootstrap e lato beckend con Java e spring framework.
                        L’ultima settimana del mese venivano organizzati progetti di gruppo da 4/5 persone e ogni venerdì un progetto individuale 
                        con valutazione.<br/><br/>
                        Riesco a mantenere la calma anche nei momenti più difficili e cerco di risolvere i problemi con più lucidità possibile.
                        Posso essere utile al tuo progetto grazie alle mie skills acquisite nel tempo con l'esperiena personale e lo studio fatto.
                        Per essere uno sviluppatore web prima bisogna essere dei bravi utenti.
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col className="col-2">
                        <img src={js} width={100 + "%"} height={100 + "%"}/>
                    </Col>
                        
                    <Col className="col-2">
                        <img src={react} width={100 + "%"} height={100 + "%"}/>
                    </Col>
                </Row>
            </Container>

            {/* Container sovrapposto */}
            {showOverlay && (
                <OverlayContainer>
                    <OverlayContent>
                        <div>
                        Benvenuto nel mio Portfolio! Mi presento, mi chiamo Maurizio Crispino, ho 19 anni e mi piace programmare!
                        </div>
                        {/* Pulsante per chiudere il container sovrapposto */}
                        <Button onClick={closeOverlay}>Chiudi</Button>
                    </OverlayContent>
                </OverlayContainer>
            )}
        </>
    );
}

export default Home;
