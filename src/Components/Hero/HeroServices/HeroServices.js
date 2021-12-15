import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiTruck, FiPhoneCall } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
const HeroServices = () => {
  return (
    <div className="my-5 d-none d-lg-block">
      <Row>
        <Col xs={6} lg={3}>
          <div
            style={{ background: "#FEE2E2", borderRadius: "15px" }}
            className="d-flex align-items-center px-4 py-2  "
          >
            <div>
              <FiTruck className="text-danger fs-3 me-5" />
            </div>
            <div>
              <h6>Free Shipping</h6>
              <p>From $20.00</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div
            style={{ background: "#E0E7FF", borderRadius: "15px" }}
            className="d-flex align-items-center px-4 py-2  "
          >
            <div>
              <FiPhoneCall className="text-danger fs-3 me-5" />
            </div>
            <div>
              <h6>Support 24/7</h6>
              <p>At Anytime</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div
            style={{ background: "#FEE2E2", borderRadius: "15px" }}
            className="d-flex align-items-center px-4 py-2  "
          >
            <div>
              <MdPayment className="text-danger fs-3 me-5" />
            </div>
            <div>
              <h6>Secure Payment</h6>
              <p>Totally Safe</p>
            </div>
          </div>
        </Col>
        <Col xs={6} lg={3}>
          <div
            style={{ background: "#E0E7FF", borderRadius: "15px" }}
            className="d-flex align-items-center px-4 py-2  "
          >
            <div>
              <AiOutlineGift className="text-danger fs-3 me-5" />
            </div>
            <div>
              <h6>Latest Offer</h6>
              <p>Upto 20% off</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroServices;
