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
import { OccupationsPage } from "./pages/OccupationsPages/OccupationsPage";
import { CreateOccupationsPage } from "./pages/OccupationsPages/CreateOccupationsPage/CreateOccupationsPage.tsx";
import { useUser } from "./api/userServices/user-api";
import { useCurrentUser } from "./stores/user-atom";

export const AppNavigator = () => {
  const [user] = useCurrentUser();

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoutes user={user} />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/occupations" element={<OccupationsPage />} />
        <Route path="/create-occupations" element={<CreateOccupationsPage />} />
      </Route>

      <Route element={<AdminRoutes user={user} />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-marina" element={<AdminMarinaPage />} />
        <Route path="/create-marina" element={<CreateMarinaPage />} />
        <Route path="/edit-marina" element={<EditMarinaPage />} />
      </Route>
    </Routes>
  );
};
