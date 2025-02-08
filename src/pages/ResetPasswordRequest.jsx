import React, { useState } from "react";
import { resetPasswordRequest } from "../api/auth";

const ResetPasswordRequest = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await resetPasswordRequest(email);
            setMessage(data.message); // Display success message
        } catch (error) {
            setMessage("Failed to send password reset email.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-5">Reset Password</h2>
                <input
                    type="email"
                    className="w-full p-2 mb-4 border rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Send Reset Email
                </button>
                <p className="mt-4 text-green-500">{message}</p>
            </form>
        </div>
    );
};

export default ResetPasswordRequest;
