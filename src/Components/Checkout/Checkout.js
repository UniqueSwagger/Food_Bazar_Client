import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import CartListItem from "../CartListItem/CartListItem";
import { clearTheCart } from "../../redux/slices/allProductSlice";
import useAuth from "../../hooks/useAuth";
const Checkout = () => {
  const {
    currentUser: { displayName, email },
  } = useAuth();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { addedProducts } = useSelector((state) => state.products);
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    data.status = "pending";
    data.addedProducts = addedProducts;
    data.email = email;
    axios
      .post("https://cryptic-journey-46422.herokuapp.com/order", data)
      .then((res) => {
        if (res.data.insertedId) {
          dispatch(clearTheCart());
          setLoading(false);
          Swal.fire(
            "Ordered successfully!",
            "Thanks for shopping with us. We will contact you soon.",
            "success"
          );
        }
      });
  };
  return (
    <div style={{ background: "#F9FAFB" }}>
      <Container>
        <Row>
          <Col xs={12} md={4} className="bg-white ">
            <h5 className="px-3 pt-3">Order Summary</h5>
            <div className="py-5 ">
              {addedProducts.length ? (
                addedProducts.map((addedProduct) => (
                  <CartListItem
                    key={addedProduct._id}
                    addedProduct={addedProduct}
                  />
                ))
              ) : (
                <h6>Your Cart is empty</h6>
              )}
            </div>
            <table className="table  table-borderless my-5">
              <tbody>
                <tr>
                  <td className="fw-bold">Subtotal</td>
                  <td className="fw-bold">${totalAddedProductsPrice}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Shipping</td>
                  <td className="fw-bold">$0.00</td>
                </tr>
                <tr>
                  <td className="fw-bold">Tax</td>
                  <td className="fw-bold">$0.00</td>
                </tr>
                <tr className="border-top">
                  <td className="fw-bold">Total</td>
                  <td className="fw-bold">${totalAddedProductsPrice}</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col xs={12} md={8}>
            <div>
              <h5 className="px-3 pt-3">Personal details</h5>
              <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                <Row xs={1} sm={1} md={2}>
                  <div className="mx-auto">
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control
                        {...register("name")}
                        required
                        type="text"
                        defaultValue={displayName}
                        placeholder="Your name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Email</Form.Label>
                      <Form.Control
                        {...register("email")}
                        required
                        disabled
                        defaultValue={email}
                        type="email"
                        placeholder="Your email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Phone number</Form.Label>
                      <Form.Control
                        {...register("phone")}
                        required
                        type="number"
                        placeholder="Your phone"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Message</Form.Label>
                      <Form.Control
                        {...register("description")}
                        as="textarea"
                        placeholder="Any special message?"
                        rows={3}
                      />
                    </Form.Group>
                  </div>
                  <div className="mx-auto">
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        {...register("originalPrice")}
                        placeholder="Enter your city name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Country</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        {...register("country")}
                        placeholder="Enter country name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Payment method Coming Soon
                      </Form.Label>
                    </Form.Group>
                    {loading ? (
                      <Button className="ms-auto d-block my-5 w-50" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </Button>
                    ) : (
                      <Button
                        disabled={!addedProducts.length}
                        className="ms-auto d-block my-5 w-50"
                        type="submit"
                      >
                        Place Order
                      </Button>
                    )}
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
