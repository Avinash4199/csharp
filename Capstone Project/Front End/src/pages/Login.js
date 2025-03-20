import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7205/api/Auth/login', credentials);
            const token = response.data.token;

            if (token) {
                localStorage.setItem('token', token); // Store token for authenticated requests
                alert('Login successful!');
                navigate('/recipes');
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Failed to log in. Please check your credentials or try again later.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
