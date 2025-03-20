import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <h1>Recipe Management System</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/add-recipe">Add Recipe</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
