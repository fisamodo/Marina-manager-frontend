import React from "react";
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../stores/user-atom";
import { IUser, UserType } from "../api-types";

interface IAdminRoutes {
  user?: IUser;
}

export const AdminRoutes: React.FC<IAdminRoutes> = ({ user }) => {
  return user?.userType === UserType.ADMIN && user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
