import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router.jsx";
import "./index.css";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";
import { ToastContainer} from 'react-toastify';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = document.getElementById("root");
const queryClient = new QueryClient()


ReactDOM.createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <RouterProvider router={router} />,
            <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);