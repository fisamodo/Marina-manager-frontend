import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { AboutPage } from "./pages/StaticPages/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AdminDashboard } from "./pages/AdminPages/AdminDashboard/AdminDashboard";
import { AdminMarinaPage } from "./pages/AdminPages/AdminMarinaPage/AdminMarinaPage";
import { CreateMarinaPage } from "./pages/AdminPages/AdminMarinaPage/CreateMarina/CreateMarinaPage";
import { EditMarinaPage } from "./pages/AdminPages/AdminMarinaPage/EditMarina/EditMarinaPage";

export const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route element={<AdminRoutes />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-marina" element={<AdminMarinaPage />} />
        <Route path="/create-marina" element={<CreateMarinaPage />} />
        <Route path="/edit-marina" element={<EditMarinaPage />} />

      </Route>
    </Routes>
  );
};
