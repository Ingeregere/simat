import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styleNavbar.css'

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg"   className={'bgNavbar'} fixed={'top'}>
  <Container>
  <Navbar.Brand as={Link} to={"/"}>SIMAT-BURUNDI</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'borderNavbar'} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Nav.Link as={Link} to={"/"} className={'linksimatbdi '}>Accueil</Nav.Link>
      <Nav.Link as={Link} to={"/hotel"}  className={'linksimatbdi '}>Hotel</Nav.Link>
      <Nav.Link as={Link} to={"/environnement"}  className={'linksimatbdi '}>Environnement</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/" className={'linksimatbdi text-danger'}>Youtube</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/" className={'linksimatbdi'}>
        facebook
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars