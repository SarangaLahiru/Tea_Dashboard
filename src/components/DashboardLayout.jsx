import React from "react";
import { Navigate } from "react-router-dom"; // Import Navigate for redirection
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext"; // Assuming useAuth is the custom hook

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth(); // Fetch user and logout from context

  // Redirect to home or login page if the user is not logged in
  if (!user) {
    return <Navigate to="/" />;  // Redirect to the homepage or login page
  }

  // Handle the logout action
  const handleLogout = () => {
    logout(); // This will log the user out
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-blue-500 hover:underline"
          >
            Logout
          </button>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
