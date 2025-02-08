import React, { useState } from "react";
import { resetPasswordConfirm } from "../api/auth";

const ResetPasswordConfirm = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await resetPasswordConfirm(email, newPassword);
            setMessage(data.message); // Display success message
        } catch (error) {
            setMessage("Failed to reset password.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-5">Set New Password</h2>
                <input
                    type="email"
                    className="w-full p-2 mb-4 border rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="w-full p-2 mb-4 border rounded"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Reset Password
                </button>
                <p className="mt-4 text-green-500">{message}</p>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;
