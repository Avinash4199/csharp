import axios from 'axios';

const API_BASE_URL = 'https://localhost:7205/api/Auth';

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Error registering user';
    }
};

// Login User
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data || 'Error logging in';
    }
};
