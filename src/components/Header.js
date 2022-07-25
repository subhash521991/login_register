import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">User Registration</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/details" className="text-decoration-none text-light mx-2">Details</NavLink>
                        <NavLink to="/login" className="text-decoration-none text-light">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
   
   </>
  )
}

export default Header