import React from "react";
import { publicRoutes } from "./routes/public-routes";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

export const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};
