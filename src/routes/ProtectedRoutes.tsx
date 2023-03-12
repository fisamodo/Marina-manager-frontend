import React from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { userRepository } from "../api/userRepository";
import { useUser } from "../hooks/useValidateUser";
import { LoginPage } from "../pages/LoginPage/LoginPage";

// const useAuth = async () => {
//   const userToken = await ?.toString();
//   const isValid = await userRepository.getUserByToken(userToken ?? "");

//   return true;
// };

export const ProtectedRoutes = () => {
  let user;
  const userToken = localStorage.getItem("token");
  if (userToken) {
    const { data, isLoading } = useUser(userToken);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    console.log(data.data.user);
    user = data.data.user;
  }
  console.log(user);
  // console.log("Data: ", data.data.user);
  // // const user = data?.data.user;
  return user ? <Outlet /> : <Navigate to="/login" />;
};
