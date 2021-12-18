import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
import useAuth from "../../../hooks/useAuth";
const TopBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addedProducts } = useSelector((state) => state.products);
  const totalAddedProducts = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity;
  }, 0);
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);
  const {
    currentUser: { displayName, photoURL },
  } = useAuth();
  const navigate = useNavigate();
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
            <NavLink to="/dashboard">
              {displayName ? (
                <div className="d-none d-lg-flex align-items-center ms-5">
                  <img
                    referrerPolicy="no-referrer"
                    style={{ width: "40px", borderRadius: "50%" }}
                    src={photoURL}
                    loading="lazy"
                    alt="img"
                  />
                </div>
              ) : (
                <AiOutlineUser className="fs-2 text-white d-none d-lg-block ms-5" />
              )}
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
              <span className="badge ">{totalAddedProducts}</span>
            </div>
          </div>
          {displayName ? (
            <NavLink to="/dashboard" className="nav__link">
              <img
                referrerPolicy="no-referrer"
                style={{ width: "40px", borderRadius: "50%" }}
                src={photoURL}
                loading="lazy"
                alt="img"
              />
            </NavLink>
          ) : (
            <NavLink to="/login" className="nav__link">
              <AiOutlineUser className="fs-1 text-white" />
            </NavLink>
          )}
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
        <NavLink className="p-3 nav-link" to="/checkout">
          <button
            onClick={handleClose}
            className={`w-100 py-3 px-3 rounded-lg checkout-btn d-flex align-items-center justify-content-between text-white ${
              !addedProducts.length && "d-none"
            }`}
          >
            <span className="h5 mb-0">Proceed To Checkout</span>
            <span className="rounded fs-5 fw-bold total py-2 px-3 bg-white ">
              ${totalAddedProductsPrice}
            </span>
          </button>
        </NavLink>
      </Offcanvas>
    </>
  );
};

export default TopBar;
