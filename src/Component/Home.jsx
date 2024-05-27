import { useState, useEffect } from "react";
import { Button, Col, Container, Nav, Navbar, NavbarBrand, Row } from "react-bootstrap";
import Blocco from "./Blocco";
import styled, { keyframes, css } from "styled-components";
import foto from "../Assets/IMG_8265.jpg";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import linkedin from "../Assets/Linkedin.jpg"
import spotify from "../Assets/Spotify.png"

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
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

// Applica l'animazione alla riga desiderata
const AnimatedRow0 = styled(Row)`
    animation: ${fadeIn} 0.5s ease-in-out;
`;
const AnimatedRow1 = styled(Row)`
    animation: ${fadeIn} 1s ease-in-out;
`;
const AnimatedRow2 = styled(Row)`
    animation: ${fadeIn} 1.5s ease-in-out;
    .aqua{
        background-color:#0095ff;
    }
    .violet{
        background-color: blueviolet;;
    }
`;
const AnimatedRow3 = styled(Row)`
    animation: ${fadeIn} 2s ease-in-out;
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
                <AnimatedRow0>
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
                </AnimatedRow0>
                <AnimatedRow1 id="Competenze" className="pt-5 text-center">

                <Col className="d-flex flex-wrap black justify-content-center rounded p-5  bg-danger">
                <h1 className="pb-5">Competenze</h1>
                <Row>
                    <Col className="col-3 ">
                        <img src={js} width={30 + "%"} alt="javascript" height={100 + "%"}/>
                    </Col>     
                    <Col className="col-3 ">
                        <img src={react} width={30 + "%"} alt="react" height={100 + "%"}/>
                    </Col>
                    <Col className="col-3">
                        <img src="https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="bootstrap" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 ">
                        <img src="https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png" width={30 + "%"} height={100 + "%"}/>
                    </Col>



                    <Col className="col-3 mt-5">
                        <img src="https://static-00.iconduck.com/assets.00/visual-studio-code-icon-2048x2037-yx7phbgk.png" alt="VisualStudio Code" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="github" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj" alt="postman" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" width={30 + "%"} height={100 + "%"}/>
                    </Col>


                    <Col className="col-3 mt-5">
                        <img src="https://www.myti.it/wp-content/uploads/2019/02/intellij-idea_logo_300x300.png" alt="Intellij" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" alt="Apple Mac" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    <Col className="col-3 mt-5">
                        <img src="https://www.uc3m.es/sdic/media/sdic/img/mediana/original/im_microsoft-ssoo-cliente---icono/im_microsoft-ssoo-cliente---icono.png" alt="Windows" width={30 + "%"} height={100 + "%"}/>
                    </Col>
                    </Row>
                    </Col>
                </AnimatedRow1>

                <AnimatedRow2 id="Progetti" className="py-4 px-4 mt-5 text-center mb-5 black rounded bg-warning">
                    <h1 className=" text-center">Progetti Personali</h1>
                    <Col className="col-6 border rounded aqua">
                        <h2>The Last World</h2>
                        <img src="https://media.licdn.com/dms/image/D4D2DAQH6U0ndTEYieA/profile-treasury-image-shrink_8192_8192/0/1709743941347?e=1715608800&v=beta&t=RogsuWF1TF7EzbwucUdrBlk0haECcI6v78Xy4C3ddXE" width={100 + "%"}/>
                    </Col>
                    <Col  className="col-6 rounded border violet">
                        <h2>Netflix Clone</h2>
                        <img src="https://media.licdn.com/dms/image/D4D22AQG9E62netGe_Q/feedshare-shrink_2048_1536/0/1699915412879?e=1716422400&v=beta&t=d1xk1TIYXHrJ6XnZe7cNvYebvt5w1WASEO4eDtwlkXs" width={100 + "%"} />
                    </Col>
                    <Col  className="col-6 border rounded">
                        <h2>Linkedin Clone</h2>
                        <img src={linkedin} width={100 + "%"} />
                    </Col>
                    <Col  className="col-6 border rounded">
                        <h2>Spotify Clone</h2>
                        <img src={spotify} width={100 + "%"} />
                    </Col>
                </AnimatedRow2>
                <AnimatedRow3 id="Contatti" className="py-4 px-4 mt-5 mb-5 black rounded bg-white">
                <h1 className=" text-center">Contattami</h1>
                <Row className="justify-content-around">
                    <Col className=" mt-5 text-center">
                        <a href=""><img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/discord_macos_bigsur_icon_190238.png" alt="Discord" width={30 + "%"} height={100 + "%"}/></a>
                    </Col>
                    <Col className=" mt-5 text-center">
                        <a href="https://www.linkedin.com/in/mauriziocrispino-webdeveloper/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="Linkedin" width={30 + "%"} height={100 + "%"}/></a>
                    </Col>
                    <Col className=" mt-5 text-center">
                        <a href="https://github.com/MaurizioCr"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="Github" width={30 + "%"} height={100 + "%"}/></a>
                    </Col>
                </Row>
                <p className="text-center mt-5">
                    <a href="mailto:crispinomaurizio034@gmail.com" style={{ textDecoration: 'none', fontWeight: "bold" }}>
                    crispinomaurizio034@gmail.com
                    </a>
                </p>
                </AnimatedRow3>
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
