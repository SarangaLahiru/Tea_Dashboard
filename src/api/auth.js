import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/auth";

export const login = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
};

export const resetPasswordRequest = async (email) => {
    const response = await axios.post(`${API_BASE_URL}/reset-password-request`, { email });
    return response.data;
};

export const resetPasswordConfirm = async (email, newPassword) => {
    const response = await axios.post(`${API_BASE_URL}/reset-password-confirm`, {
        email,
        new_password: newPassword,
    });
    return response.data;
};
