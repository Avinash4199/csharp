import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../services/recipeService';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    // Fetch Recipes
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getRecipes();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error.message);
                alert('Failed to load recipes.');
            }
        };
        fetchRecipes();
    }, []);

    // Handle Edit Button
    const handleEdit = (id) => {
        navigate(`/edit-recipe/${id}`);
    };

    // Handle Delete Button
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this recipe?')) return;

        try {
            await deleteRecipe(id);
            alert('Recipe deleted successfully!');
            setRecipes(recipes.filter(recipe => recipe.id !== id));  // Update state after deletion
        } catch (error) {
            console.error('Error deleting recipe:', error.message);
            alert('Failed to delete recipe. Please try again.');
        }
    };

    return (
        <div className="recipe-list-container">
            <h1>Recipe List</h1>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe-item">
                        <RecipeCard recipe={recipe} />
                        <div className="recipe-actions">
                            <button 
                                className="edit-button" 
                                onClick={() => handleEdit(recipe.id)}
                            >
                                 Edit
                            </button>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDelete(recipe.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
