import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { NavBar } from "./pages/LandingPage/NavBar";
import { AboutPage } from "./pages/StaticPages/AboutPage";

export const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};
