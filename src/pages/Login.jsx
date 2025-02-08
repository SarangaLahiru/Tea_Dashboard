import React, { useState } from "react";
import { login as apiLogin } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await apiLogin(email, password);
      login({ email }, access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Please log in to your account
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a
              href="/reset-password"
              className="text-blue-500 hover:underline"
            >
              Reset it here
            </a>
          </p>

        </div>
      </form>
    </div>
  );
};

export default Login;
