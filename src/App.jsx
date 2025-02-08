import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ResetPasswordRequest";
import ResetPasswordRequest from "./pages/ResetPasswordRequest";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reset-password" element={<ResetPasswordRequest />} />
        <Route path="/reset-password-confirm" element={<ResetPasswordConfirm />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
