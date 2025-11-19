import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router.jsx";
import "./index.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />,
      </AuthProvider>
  </StrictMode>
);