import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSettings, FiUser, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); // Get the current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`h-screen bg-gray-800 text-white ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 h-16 bg-gray-900">
        {isOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4">
  <ul>
    {/* <li>
      <Link
        to="/"
        className={`py-2 px-4 flex items-center ${
          isActive("/") ? "bg-gray-700 border-l-4 border-blue-500" : "hover:bg-gray-700"
        }`}
      >
        <FiHome size={20} />
        {isOpen && <span className="ml-4">Home</span>}
      </Link>
    </li> */}
    <li>
      <Link
        to="/dashboard"
        className={`py-2 px-4 flex items-center ${
          isActive("/dashboard") ? "bg-gray-700 border-l-4 border-blue-500" : "hover:bg-gray-700"
        }`}
      >
        <FiUser size={20} />
        {isOpen && <span className="ml-4">Dashboard</span>}
      </Link>
    </li>
    <li>
      <Link
        to="/settings"
        className={`py-2 px-4 flex items-center ${
          isActive("/settings") ? "bg-gray-700 border-l-4 border-blue-500" : "hover:bg-gray-700"
        }`}
      >
        <FiSettings size={20} />
        {isOpen && <span className="ml-4">Settings</span>}
      </Link>
    </li>
  </ul>
</nav>


      {/* Footer */}
      <div className="h-16 bg-gray-900 flex items-center justify-center">
        {isOpen && <p className="text-gray-400 text-sm">© 2024 Dashboard</p>}
      </div>
    </div>
  );
};

export default Sidebar;
