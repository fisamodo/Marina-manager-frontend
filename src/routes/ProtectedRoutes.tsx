import React from "react";
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../stores/user-atom";

export const ProtectedRoutes = () => {
  const [user] = useCurrentUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};
