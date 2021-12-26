import React from "react";
import { Row, Col } from "react-bootstrap";
const WelcomeSection = () => {
  const information = [
    {
      quantity: "10k",
      title: "Listed Products",
      description: "Dynamically morph team driven partnerships after vertical.",
    },
    {
      quantity: "8k",
      title: "Lovely Customers",
      description: "Competently productive virtual models without performance.",
    },
  ];
  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <h1>Welcome to our FoodBazar</h1>
          <p>
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal.
          </p>
          <p>
            Dynamically embrace diverse customer service and installed base
            paradigms. Credibly seize enterprise-wide experiences for end-to-end
            data. Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </p>
          <Row>
            {information.map((info) => {
              const { quantity, title, description } = info;
              return (
                <Col key={title} xs={12} md={6}>
                  <div
                    style={{
                      backgroundColor: "#EEF2FF",
                      borderRadius: "35px",
                      padding: "2rem",
                    }}
                  >
                    <h2>{quantity}</h2>
                    <h5>{title}</h5>
                    <p>{description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <img
            className="w-100"
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-us.jpg&w=1080&q=75"
            alt="foodImages"
          />
        </Col>
      </Row>
      <div className="my-5">
        <p>
          Holisticly seize parallel metrics and functional ROI. Seamlessly
          revolutionize error-free internal or "organic" sources before
          effective scenarios. Progressively incentivize state of the art
          applications for efficient intellectual capital. Credibly leverage
          existing distinctive mindshare through cutting-edge schemas.
          Proactively procrastinate team building paradigms coordinate
          client-centric total transparent internal. Energistically
          reconceptualize global leadership for high-quality networks. Credibly
          restore an expanded array of systems rather than accurate results.
          Collaboratively synergize backend bandwidth without 24/7
          functionalities. Credibly utilize proactive ideas whereas cross-media
          core competencies. Uniquely maximize professional best practices
          through resource maximizing services. Conveniently architect
          cross-unit web services for e-business imperatives.
        </p>
        <p>
          Appropriately visualize market-driven data before one-to-one
          scenarios. Collaboratively productize multifunctional ROI through
          intuitive supply chains. Enthusiastically seize revolutionary value
          and process-centric services. Competently harness intuitive
          information after interoperable markets. Interactively revolutionize
          future-proof value before granular sources. Dynamically embrace
          diverse customer service and installed base paradigms. Credibly seize
          enterprise-wide experiences for end-to-end data. Professionally brand
          flexible alignments and cost effective architectures. Enthusiastically
          incentivize seamless communities with seamlessly facilitate
          revolutionary metrics with strategic theme areas.
        </p>
        <img
          style={{ borderRadius: "25px" }}
          className="w-100"
          src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-banner.jpg&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
