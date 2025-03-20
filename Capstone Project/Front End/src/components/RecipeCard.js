import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <div className="actions">
                <Link to={`/edit-recipe/${recipe.id}`}>Edit</Link>
                <Link to={`/delete-recipe/${recipe.id}`} className="delete-link">Delete</Link>
            </div>
        </div>
    );
}

export default RecipeCard;
