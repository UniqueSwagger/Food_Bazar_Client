import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { admin } = useAuth();
  return (
    <div className="navigation d-lg-block d-none">
      <Navbar bg="white" className="border-bottom">
        <Container>
          <Nav>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/aboutUs">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/contactUs">
              Contact Us
            </NavLink>
            {admin && (
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            )}
          </Nav>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/privacy-policy">
              Privacy Policy
            </NavLink>
            <NavLink className="nav-link" to="/terms-and-conditions">
              Terms & Conditions
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
