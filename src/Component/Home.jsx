import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Blocco from "./Blocco";
import styled, { keyframes, css } from "styled-components";

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
            <div>
                Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo 
                tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo 
                a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare,
                negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più 
                recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
            </div>

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
