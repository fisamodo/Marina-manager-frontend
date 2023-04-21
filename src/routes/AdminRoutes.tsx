import React from "react";
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../stores/user-atom";

export const AdminRoutes = () => {
  const [user] = useCurrentUser();
  return user.userType === "admin" ? <Outlet /> : <Navigate to="/" />;
};
