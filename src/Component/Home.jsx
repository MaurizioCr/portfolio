import { Col, Container, Row } from "react-bootstrap"

const Blocco = () =>{

    return(
        <>
            <Container className="text-center mt-5">
                <Row>
                    <div className="bg-secondary " style={{width: "40rem", height: "30rem"}}>
                        <Col className="text-center pt-5 mt-5">
                            Benvenuto nel mio Portfolio! Mi presento, mi chiamo Maurizio Crispino, ho 19 anni e mi piace programmare!
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Blocco