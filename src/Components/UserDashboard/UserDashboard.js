import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const UserDashboard = () => {
  const {
    currentUser: { email },
    handleLogout,
  } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${email}`)
      .then((res) => setUserOrders(res.data));
  }, [email]);

  const pendingOrders = userOrders.filter(
    (order) => order.status === "pending"
  );
  const processingOrders = userOrders.filter(
    (order) => order.status === "processing"
  );
  const completedOrders = userOrders.filter(
    (order) => order.status === "completed"
  );

  const location = useLocation();

  return (
    <div style={{ background: "#F9FAFB" }}>
      <div className="mx-3">
        <Row>
          <Col xs={12} md={4} lg={3}>
            <div className="w-100 d-flex flex-column bg-white p-5">
              <NavLink
                className="p-2 nav-link my-2 rounded hover w-100"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="p-2 nav-link my-2  w-100"
                to="/dashboard/myOrders"
              >
                My Orders
              </NavLink>
              <NavLink
                onClick={handleLogout}
                className="p-2 nav-link my-2  w-100"
                to="/"
              >
                Log out
              </NavLink>
            </div>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <div className="bg-white p-5">
              {location.pathname === "/dashboard" ? (
                <>
                  <h5>Dashboard</h5>
                  <Row xs={1} md={2} lg={4}>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-danger"
                        >
                          <AiOutlineShoppingCart className="text-white fs-4" />
                        </div>
                        <div>
                          <h5 className="mb-2 ">Total Order</h5>
                          <p className="">{userOrders.length}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-primary"
                        >
                          <MdPendingActions className="text-white fs-4" />
                        </div>
                        <div>
                          <h5 className="mb-2 ">Pending Order</h5>
                          <p className="">{pendingOrders.length}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-dark"
                        >
                          <GiProcessor className="text-white fs-4" />
                        </div>
                        <div>
                          <h5 className="mb-2 ">Processing Order</h5>
                          <p className="">{processingOrders.length}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-success"
                        >
                          <i className="fas fa-check-circle text-white fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-2 ">Complete Order</h5>
                          <p className="">{completedOrders.length}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ) : (
                <MyOrders userOrders={userOrders} />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserDashboard;
