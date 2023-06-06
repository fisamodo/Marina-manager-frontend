import React from "react";
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../stores/user-atom";
import { useUser } from "../api/userServices/user-api";
import { IUser } from "../api-types";

interface IProtectedRoutes {
  user?: IUser;
}

export const ProtectedRoutes: React.FC<IProtectedRoutes> = (user) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};
