import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBarWrapper.scss";

export default function NavBarWrapper(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tournament</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tournaments">Tournaments</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#venues">Venues</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
