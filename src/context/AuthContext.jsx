import React, { createContext, useContext, useState } from "react";

// Create the Auth Context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Simulating logged-in user state

  const login = (email, password) => {
    // Dummy login logic
    if (email === "admin@example.com" && password === "password") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // Dummy signup logic
    setUser({ email });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
