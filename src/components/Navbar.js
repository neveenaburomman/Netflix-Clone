
import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FavList">FavList </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

}