import React, { Fragment } from "react";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
export default function Component() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Service</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}
