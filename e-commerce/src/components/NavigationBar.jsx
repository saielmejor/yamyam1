import { useState, React } from "react";
  import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LinkContainer } from "react-router-bootstrap";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/esm/Button";
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function NavigationBar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <div className="align-items-center">
         
          <Navbar.Brand href="#home" style={{ color: "white" }}>
          <img src="/images/yamyam.png" alt="logo" />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#delivery">Gifting</Nav.Link>
            <Nav.Link href="#pickup">Rewards</Nav.Link>
            <Nav.Link href="#pickup">Catering </Nav.Link>
            <Nav.Link href="#pickup">Our Values </Nav.Link>
            <NavDropdown
              title="Your Account"
              id="basic-nav-dropdown"
              style={{ color: "white" }}
            >
              <NavDropdown.Item href="#action/3.1">
                Your account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Takeout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>

          <div>
            {isMobile && (
              <div>
              <a href="/"><ShoppingCartIcon 
                  style={{ color: "white", marginTop: "5px" }}
                /></a>
              </div>
            )}

            {isDesktop && (
              <div class="d-flex p-2">
              <a href="/" style={{textDecoration:"none", color:"black"}}><PersonIcon
                  style={{ color: "black", fontSize:"28px",justifyContent:"center"}}
                /> SIGN IN/JOIN </a>
                
                <a href="/" className="mx-4"><LocalMallIcon  style={{ color: "black",  fontSize:"26px", justifyContent:"center"}}/> </a>
              </div>
              
            )}
          </div>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

    </div>
  );
}
