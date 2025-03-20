import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>🍳 Welcome to Recipe Management System</h1>
            </header>

            <main className="main-content">
                <div className="auth-links">
                    <Link to="/login" className="auth-button">🔑 Login</Link>
                    <Link to="/register" className="auth-button">📝 Register</Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
