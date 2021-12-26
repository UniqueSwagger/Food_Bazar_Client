import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../../context/AuthProvider";
import ForgotPasswordPage from "../../Pages/ForgotPasswordPage/ForgotPasswordPage";
import Home from "../../Pages/Home/Home";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SignupPage from "../../Pages/SignupPage/SignupPage";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import TopBar from "../Shared/TopBar/TopBar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import UserDashboard from "../UserDashboard/UserDashboard";
import MyOrders from "../MyOrders/MyOrders";
import Admin from "../Admin/Admin";
import Checkout from "../Checkout/Checkout";
import AboutUsPage from "../../Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../../Pages/ContactUsPage/ContactUsPage";
import PrivacyPolicyPage from "../../Pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsConditionsPage from "../../Pages/Terms&ConditionsPage/Terms&ConditionsPage";
const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <div style={{ zIndex: 20 }} className="position-sticky top-0">
          <TopBar />
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/myOrders" element={<MyOrders />} />
          </Route>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditionsPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
