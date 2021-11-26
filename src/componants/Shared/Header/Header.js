import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Popular Diagonostic Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user?.email?
                            <Button onClick={logOut} variant="dark">Log Out</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </>
    );
};

export default Header;