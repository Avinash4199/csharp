import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';

import EditRecipe from './components/EditRecipe';
import Navbar from './components/Navbar';


import './App.css';
// src/index.js (or src/App.js)
// src/index.js (or src/App.js)
//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recipes" element={<RecipeList />} />
                    <Route path="/add-recipe" element={<AddRecipe />} />
                    <Route path="/edit-recipe/:id" element={<EditRecipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
