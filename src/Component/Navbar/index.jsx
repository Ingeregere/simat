import React, {useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link ,useLocation} from 'react-router-dom'
import './styleNavbar.css'

function Navbars() {
  const mainContent = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  return (
    <Navbar collapseOnSelect expand="lg" className={'bgNavbar'} fixed={'top'} >
  <Container>
  <Navbar.Brand as={Link} to={"/"}><img src={'images/logo.png'} alt={"logo"}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " className={'borderNavbar '} />
  <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
    <Nav className="me-right" ref={mainContent}>
      <Nav.Link as={Link} to={"/reserves-naturels"}  className={'linksimatbdi text-dark '}>Réserves naturels</Nav.Link>
      <Nav.Link as={Link} to={"/lieux-touristiques"}  className={'linksimatbdi text-dark '}>Lieux touristiques</Nav.Link>
      <Nav.Link as={Link} to={"/eaux-thermales"}  className={'linksimatbdi text-dark '}>Eaux thermales</Nav.Link>
      <Nav.Link as={Link} to={"/monuments"}  className={'linksimatbdi text-dark '}>Monuments</Nav.Link>
      <Nav.Link as={Link} to={"/historiques"}  className={'linksimatbdi text-dark '}>Historiques</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars