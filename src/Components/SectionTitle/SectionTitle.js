import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ title, description }) => {
  return (
    <div className="my-4 text-center section-title">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
