import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const {
    currentUser: { email },
    loading,
  } = useAuth();
  const location = useLocation();
  if (loading) return <Loader />;
  else if (email) return children;
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
