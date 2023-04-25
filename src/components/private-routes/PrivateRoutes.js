import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.admin);
  return user._id ? children : <Navigate to="/"></Navigate>;
};
