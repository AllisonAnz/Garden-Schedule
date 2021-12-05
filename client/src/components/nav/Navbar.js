import React from 'react'
import { Navbar, Form, Button, Nav, Offcanvas, NavDropdown, Container, FormControl } from 'react-bootstrap'

const NavigationBar = ({onLogout, user, loggedIn}) => {
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                
                                {loggedIn ? (
                                    <>
                                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Button variant="outline-success" onClick={onLogout}>Logout</Button>
                                    </>
                                    ): ("") }
                            </Nav>
                           
                        
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;