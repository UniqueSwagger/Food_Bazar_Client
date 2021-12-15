import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import TopBar from "../Shared/TopBar/TopBar";

const AppRouter = () => {
  return (
    <Router>
      <div style={{ zIndex: 20 }} className="position-sticky top-0">
        <TopBar />
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
