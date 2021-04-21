import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "./NavBar.css";

class NavBar extends React.Component {
  logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.clear();
      this.props.history.push("/login");
    }
  };
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return (
        <div className="nav">
         
          <div>
            <Navbar collapseOnSelect expand="lg" bg="no-color" variant="dark">
              <Navbar.Brand href="/">
                <img
                  src="logo/instagram.png"
                  width="200"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  
                  <Nav.Link href="/about">About us</Nav.Link>
                  
                  
                  <Nav.Link href="/blog">Stories</Nav.Link>
                  <Nav.Link href="/contact">Contact us</Nav.Link>
                  <NavDropdown title="Profile" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      );
    }
    if (token) {
      return (
        <div className="nav">
  
          <div>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="no-color"
              variant="dark"
              className="justify-content-between"
            >
              <Navbar.Brand href="/">
                <img
                  src="logo/logo.png"
                  width="140"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
               
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Nav className="">
                <Button onClick={this.logout}>Logout</Button>
              </Nav>
            </Navbar>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(NavBar);
