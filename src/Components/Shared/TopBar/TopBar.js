import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import "./TopBar.css";
import { useSelector } from "react-redux";
import CartListItem from "../../CartListItem/CartListItem";
const TopBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addedProducts } = useSelector((state) => state.products);
  const totalAddedProducts = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity;
  }, 0);
  return (
    <>
      <div className="topBar">
        <Navbar style={{ background: "#10B981" }} variant="dark">
          <Container className="d-flex align-items-center">
            <Navbar.Brand
              as={NavLink}
              className="w-25 d-none d-lg-block"
              to="/"
            >
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
            <AiOutlineShoppingCart
              style={{ cursor: "pointer" }}
              onClick={handleShow}
              className="fs-1 text-white d-none d-lg-block"
            />
            <span
              style={{ cursor: "pointer" }}
              onClick={handleShow}
              className="badge d-none d-lg-block"
            >
              {totalAddedProducts}
            </span>
            <NavLink to="/login">
              <AiOutlineUser className="fs-2 text-white d-none d-lg-block ms-5" />
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
          <div
            style={{ cursor: "pointer" }}
            onClick={handleShow}
            className="nav__link"
          >
            <div>
              <AiOutlineShoppingCart className="fs-1 text-white" />
              <span className="badge ">0</span>
            </div>
          </div>
          <NavLink to="/login" className="nav__link">
            <AiOutlineUser className="fs-1 text-white" />
          </NavLink>
        </footer>
      </div>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {addedProducts.length ? (
            addedProducts.map((addedProduct) => (
              <CartListItem
                key={addedProduct._id}
                addedProduct={addedProduct}
              />
            ))
          ) : (
            <h2>Your Cart is empty</h2>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TopBar;
