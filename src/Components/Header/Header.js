
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <NavLink className="navbar-brand" to="/">React Auth</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" exact to="/shipping">Shipping </NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        {user?.email && <><span className="text-light">{user.email}</span> <Button variant="danger" onClick={logOut}>Sign Out</Button></>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;