import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultErrorPage } from "./pages/ErrorPages/DefaultErrorPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { userRepository } from "./api/userRepository";
import { AppNavigator } from "./AppNavigator";

const user = localStorage.getItem("token"); //check is valid
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
