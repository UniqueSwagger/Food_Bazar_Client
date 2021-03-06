import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { admin } = useAuth();
  const location = useLocation();
  if (admin) return children;
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
