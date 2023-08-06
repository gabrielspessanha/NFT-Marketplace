import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss'


export default function Header() {
  return (
    <header>
      <Navbar data-bs-theme="dark" bg='transparent' expand="xl" className='header-home'>
        <div className='container-fluid container'>
          <Navbar.Brand href="#home">NFT marketplace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='my-2'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Marketplace</Nav.Link>
              <Nav.Link href="#link">Rankings</Nav.Link>
              <Nav.Link href="#link">Connect a wallet</Nav.Link>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}


