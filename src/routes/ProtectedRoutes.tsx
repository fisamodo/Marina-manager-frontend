import React from "react";
import { Navigate, Outlet } from "react-router";
import { useRecoilState } from "recoil";
import { useUserIsLoggedIn } from "../hooks/useValidateUser";
import { userAtom } from "../stores/user-atom";

export const ProtectedRoutes = () => {
  const [user] = useRecoilState(userAtom);
  if (!user) {
    useUserIsLoggedIn();
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};
