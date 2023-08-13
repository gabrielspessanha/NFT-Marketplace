import logo from "../../assets/marketplace.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "./styles.module.scss"

export default function Header() {
  return (
    <header className={styles.header01}>
      <Navbar
        data-bs-theme="dark"
        bg="transparent"
        expand="xl"
        className="header-home"
      >
        <Container className="container-fluid">
          <div className="logo-header">
            <img style={{
              width: "2rem",
              paddingRight: "5px"
            }} src={logo} />
            <Navbar.Brand href="#home" className="navBrand">
              NFT marketplace
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-1" />
          <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navItems}`}>
            <Nav className={`me-auto`}>
              <Nav.Link href="#home">Marketplace</Nav.Link>
              <Nav.Link href="#link">Rankings</Nav.Link>
              <Nav.Link href="#link">Connect a wallet</Nav.Link>
              <Nav.Link href="#link" className={styles.singUp}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
