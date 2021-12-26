import React from "react";
import { Row, Col } from "react-bootstrap";
import "./myOrders.css";
const MyOrders = ({ userOrders }) => {
  const status = userOrders.map((order) => order.status);
  const allAddedProducts = userOrders.map((order) => {
    return order.addedProducts.map((product) => {
      return product;
    });
  });
  const flatAddedProducts = allAddedProducts.flat();
  return (
    <div>
      <h3>My Orders</h3>
      <Row className="g-3 my-4">
        {flatAddedProducts.map((product) => {
          const { _id, originalPrice, cartQuantity, title, image, unit } =
            product;
          return (
            <Col key={_id} xs={12} md={4}>
              <div className="order-card card bg-white p-3">
                <span
                  style={{ zIndex: 10 }}
                  className=" position-absolute bg-danger text-white px-2 rounded "
                >
                  {status.includes("pending")
                    ? "pending"
                    : status.includes("processing")
                    ? "processing"
                    : "completed"}
                </span>
                <div>
                  <img
                    style={{ zIndex: 1 }}
                    className="w-100"
                    src={image}
                    alt={title}
                  />
                </div>
                <small className="text-muted d-block">{unit}</small>
                <small>{title}</small>
                <h6>Original Price : ${originalPrice}</h6>
                <h6>Ordered Quantity : {cartQuantity}</h6>
                <div className="d-flex mt-2 align-items-center justify-content-between">
                  <div>
                    <span className="mb-0 h4 me-1">
                      Total : ${originalPrice * cartQuantity}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MyOrders;
