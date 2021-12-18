import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "../../hooks/useAuth";

const UserDashboard = () => {
  const location = useLocation();
  const { handleLogout } = useAuth();
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
                          <p className="">38</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-danger"
                        >
                          <MdPendingActions className="text-white fs-4" />
                        </div>
                        <div>
                          <h5 className="mb-2 ">Pending Order</h5>
                          <p className="">38</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-danger"
                        >
                          <GiProcessor className="text-white fs-4" />
                        </div>
                        <div>
                          <h5 className="mb-2 ">Processing Order</h5>
                          <p className="">38</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="d-flex h-100 my-3">
                      <div className="d-flex align-items-center border w-100 rounded p-3">
                        <div
                          style={{ borderRadius: "50%" }}
                          className="d-flex align-items-center justify-content-center text-center p-3 me-4 bg-danger"
                        >
                          <i className="fas fa-check-circle text-white fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-2 ">Complete Order</h5>
                          <p className="">38</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ) : (
                <MyOrders />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserDashboard;
