import React from "react";
import "./BreadCrumb.css";
const BreadCrumb = ({ title }) => {
  return (
    <div>
      <div className="breadCrumb d-flex justify-content-center w-100">
        <div className="d-flex mx-auto w-100 ">
          <div className="w-100 ">
            <h2 className="text-center fw-bold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
