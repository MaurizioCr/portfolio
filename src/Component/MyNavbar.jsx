import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Competenze</Nav.Link>
            <Nav.Link href="#features">Progetti Personali</Nav.Link>
            <Nav.Link href="#pricing">Contatti</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default MyNavbar;