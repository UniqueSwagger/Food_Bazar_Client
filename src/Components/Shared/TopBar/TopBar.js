import React from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="topBar">
      <Navbar style={{ background: "#10B981" }} variant="dark">
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={NavLink} className="w-25 d-none d-lg-block" to="/">
            <img style={{ width: "18%" }} src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="mx-auto w-100">
            <Form className="topBarForm">
              <FormControl
                type="search"
                placeholder="Search for product (eg. fish, meat, vegetables)"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <AiOutlineShoppingCart className="fs-1 text-white d-none d-lg-block me-5" />
          <NavLink to="/login">
            <AiOutlineUser className="fs-2 text-white d-none d-lg-block" />
          </NavLink>
        </Container>
      </Navbar>
      <footer className="d-lg-none d-flex">
        <NavLink to="/dashboard" className="nav__link">
          <MdOutlineDashboard className="fs-1 text-white" />
        </NavLink>
        <NavLink to="/home" className="nav__link">
          <AiOutlineHome className="fs-1 text-white" />
        </NavLink>
        <NavLink to="/" className="nav__link">
          <AiOutlineShoppingCart className="fs-1 text-white" />
        </NavLink>
        <NavLink to="/login" className="nav__link">
          <AiOutlineUser className="fs-1 text-white" />
        </NavLink>
      </footer>
    </div>
  );
};

export default TopBar;
