import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <BreadCrumb title="Privacy Policy" />
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
