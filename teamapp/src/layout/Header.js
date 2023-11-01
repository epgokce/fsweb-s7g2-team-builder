import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" exact>
            Ana Sayfa
          </NavLink>

          <NavLink className="nav-link" to="/members">
            Üyeler
          </NavLink>
          <NavLink className="nav-link" to="/create-member">
            <i className="fa-solid fa-plus me-2" />
            Üye Oluştur
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
