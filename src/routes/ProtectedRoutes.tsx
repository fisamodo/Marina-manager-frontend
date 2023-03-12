import React from "react";
import { Navigate, Outlet } from "react-router";
import { useRecoilState } from "recoil";
import { useUser } from "../hooks/useValidateUser";
import { userAtom } from "../stores/user-atom";

export const ProtectedRoutes = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const userToken = localStorage.getItem("token");
  if (userToken) {
    const { data, isLoading } = useUser(userToken);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    setUser(data.data.user);
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};
