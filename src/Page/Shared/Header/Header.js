import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>

          <Nav className="mx-auto textAll">

            <Nav.Link as={HashLink} to="/Home#Home" >Home</Nav.Link>
            <Nav.Link as={HashLink} to="/Home#Tourism">Tourism</Nav.Link>
            <Nav.Link as={HashLink} to="/Home#Gallery">Gallery</Nav.Link>
            <Nav.Link as={HashLink} to="/Home#Operators">Operators</Nav.Link>

            <Nav.Link as={HashLink} to="/Tourism">Add-Tourism</Nav.Link>
            <Nav.Link as={HashLink} to="/ManageOrders">ManageOrders</Nav.Link>

            <Navbar.Collapse className="justify-content-end">
              {user?.email ?
                <Button onClick={logOut} variant='light' className='Buton'>LogOut</Button> :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              <Navbar.Text >
                <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;