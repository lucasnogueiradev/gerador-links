import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menu() {
  const [text, setText] = useState(
    <a
      style={{ color: "rgb(90, 90, 90)", marginTop: "-1rem" }}
      className="tipo"
    >
      Tipos de bots
    </a>
  );

  const styled = {
    alignItems: "center",
    display: "flex",
    color: "#fff",
    gap: "0.5rem",
    marginTop: "5px",
  }

  return (
    <Navbar expand="lg" >
      <Container className="container-menu" style={{ styled }}>
        <Navbar.Brand href="#home">
          <div className="logo-bot" style={styled}>
            <img src="IMG_3583.png" width={50} alt="logo" />
            <p style={{ marginTop: "10px", fontSize: "18px", fontFamily: "Poppins" }}>Otimize</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="navbar-collapse collapse"
        >
          <Nav className="me-auto">
            <Link className="home" to="gerar-link-whatsapp">
              Gerar link para Whatsapp
            </Link>
            <Nav.Link href="#home" className="home">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="sobre">
              Sobre
            </Nav.Link>

            <Nav.Link href="#planos" className="sobre">
              Planos
            </Nav.Link>
            <Nav.Link href="#disparo" className="disparo">
              Disparo em massa
            </Nav.Link>
            <Nav.Link
              href="https://otimizedisparos.shop"
              className="contato"
              style={{
                background: "#ff6100",
                borderRadius: "6px",
                alignItems: "center",
                marginTop: "4px",
                paddingTop: "3px",

              }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
