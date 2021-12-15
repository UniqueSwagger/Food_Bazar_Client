import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="my-4 text-center">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
