/* eslint react/prop-types: 0 */

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./styles/index.css";

// Auth
import { AuthProvider } from "./contexts/AuthContext";

// page imports
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

// admin page import
import AppLayout from "./pages/admin/AppLayout";
import ProtectedRoute from "./pages/admin/ProtectedRoute";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* Children routes are wrapped in a parent route */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Admin protected route. Cant do this in 6.0 as protected route doesnt exist yet. AppLayout is displayed when login is successful */}
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />
          {/* Other routes that do not exist go to page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
