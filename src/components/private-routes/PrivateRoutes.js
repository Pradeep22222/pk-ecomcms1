import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    const location=useLocation()
  const { user } = useSelector((state) => state.admin);
  return user._id ? children : <Navigate to="/" replace state={{from:location}}></Navigate>;
};
