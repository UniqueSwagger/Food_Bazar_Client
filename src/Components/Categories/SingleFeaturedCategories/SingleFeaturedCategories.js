import React from "react";
import { Col } from "react-bootstrap";

const SingleFeaturedCategories = ({ category: { parent, icon } }) => {
  return (
    <Col xs={6} md={4} lg={2}>
      <div
        style={{ borderRadius: "15px" }}
        className="d-flex align-items-center border m-2 p-3"
      >
        <img className="img-fluid w-25 me-3" src={icon} alt={parent} />
        <h6 className="text-muted mb-0">{parent}</h6>
      </div>
    </Col>
  );
};

export default SingleFeaturedCategories;
