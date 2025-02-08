import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component that will wrap your app and manage authentication
export const AuthProvider = ({ children }) => {
  // Initialize the user and token state from localStorage if available
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  // Handle login, which sets the user data and token, also saves to localStorage
  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data as JSON
  };

  // Handle logout, which clears the user data and token from the state and localStorage
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // Optional: If the user is logged in and has a valid token, you can fetch additional data or validate the token on load.
  useEffect(() => {
    if (token) {
      // Perform token validation (optional, e.g., call an API to check if token is valid)
      // For now, we just log the token to show it's persisted.
      console.log("Token persisted:", token);
    }
  }, [token]);

  // Return the context provider with value to be accessible in any component within AuthProvider
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily in any component
export const useAuth = () => useContext(AuthContext);
