import React from 'react'
import { Navbar, Button, Nav, Offcanvas, NavDropdown, Container } from 'react-bootstrap'

const NavigationBar = ({onLogout, loggedIn}) => {
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">Welcome!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                
                                {loggedIn ? (
                                    <>
                                    <Nav.Link href="/newplant">Add New Plant</Nav.Link>
                                    <NavDropdown title="My Plants" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="/allplants">All Plants</NavDropdown.Item>
                                        <NavDropdown.Item href="/gardenplants">Garden Plants</NavDropdown.Item>
                                        <NavDropdown.Item href="/houseplants"> House Plants</NavDropdown.Item>
                                            <NavDropdown.Item href="/veggieplants"> Veggie Plants</NavDropdown.Item>
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