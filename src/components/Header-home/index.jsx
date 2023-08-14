import logo from "../../assets/marketplace.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ButtonLg from './ButtonLg';
import styles from "./styles.module.scss"
import { Person } from "react-bootstrap-icons";

export default function Header() {
  return (
    <header className={styles.header01}>
      <Navbar
        data-bs-theme="dark"
        bg="transparent"
        expand="xl"
        className="header-home"
      >
        <Container className="justify-content-between">
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
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${styles.navItems}`}>
              <Nav.Link className={styles.itemsNavLink} href="#home">Marketplace</Nav.Link>
              <Nav.Link className={styles.itemsNavLink} href="#link">Rankings</Nav.Link>
              <Nav.Link className={styles.itemsNavLink} href="#link">Connect a wallet</Nav.Link>
              <ButtonLg className={styles.buttonLgHeader01}>
                <Person className={`me-2 bg-transparent ${styles.iconHeader}`} size={20} />
                {"Sign Up"}
              </ButtonLg>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </header>
  );
}
