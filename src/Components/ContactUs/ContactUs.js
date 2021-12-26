import React from "react";
import { Row, Col } from "react-bootstrap";
const ContactUs = () => {
  return (
    <Row className="m-4 ">
      <Col xs={12} md={4}>
        <div
          style={{ borderRadius: "25px" }}
          className="border p-5 text-center h-100"
        >
          <span className="d-flex justify-content-center mb-4 text-success fs-1">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
          <h5 className="mb-2 fw-bold">Email Us</h5>
          <p className="mb-0">
            <a
              className="me-2 text-decoration-none text-success"
              href="mailto:s.rahmanrahi191491@outlook.com"
            >
              s.rahmanrahi191491@outlook.com
            </a>
            Interactively grow empowered for process-centric total linkage.
          </p>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div
          style={{ borderRadius: "25px" }}
          className="border p-5 text-center h-100"
        >
          <span className="d-flex justify-content-center mb-4 text-success fs-1">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
          <h5 className="mb-2 fw-bold">Location</h5>
          <p className="mb-0">115/1 North Kalimabad, Moulvibazar, Bangladesh</p>
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div
          style={{ borderRadius: "25px" }}
          className="border p-5 text-center h-100"
        >
          <span className="d-flex justify-content-center mb-4 text-success fs-1">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <h5 className="mb-2 fw-bold">Call Us</h5>
          <p className="mb-0">
            <a
              className="me-2 text-decoration-none text-success"
              href="tel:+8001731248533"
            >
              +8001731248533
            </a>
            Distinctively disseminate focused solutions clicks-and-mortar
            ministate..
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ContactUs;
