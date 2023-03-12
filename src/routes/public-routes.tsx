import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultErrorPage } from "../pages/ErrorPages/DefaultErrorPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <DefaultErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <DefaultErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <DefaultErrorPage />,
  },
];

// export const privateRoutes = [];
