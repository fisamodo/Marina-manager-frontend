import React from "react";
import { publicRoutes } from "./routes/public-routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userRepository } from "./api/userRepository";
import { useUser } from "./hooks/useValidateUser";

export const AppNavigator = () => {
  const publicRouter = createBrowserRouter(publicRoutes);
  // const privateRouter = createBrowserRouter(privateRoutes);
  const userToken = localStorage.getItem("token");
  return (
    <>
      {/* <RouterProvider router={privateRouter} /> */}
      <RouterProvider router={publicRouter} />
    </>
  );
};
