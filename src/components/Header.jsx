import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="header-nav">
      <Container>
        <Navbar.Brand as ={Link} to="/">
        <Image src='https://i.pinimg.com/736x/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg' alt='imge-2' className='header-image'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="/">Home</Nav.Link>
            <Nav.Link as ={Link} to="/product">Products</Nav.Link>
            <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as ={Link} to="/services">Services</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as ={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as ={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;