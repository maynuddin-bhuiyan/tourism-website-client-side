import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>

          <Nav className="mx-auto textAll">

            <Nav.Link as={Link} to="/Home#Home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Home#Tourism">Tourism</Nav.Link>
            <Nav.Link as={Link} to="/Home#Gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/Home#Operators">Operators</Nav.Link>

            <Nav.Link as={Link} to="/Tourism">Add-Tourism</Nav.Link>
            <Nav.Link as={Link} to="/ManageOrders">ManageOrders</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;