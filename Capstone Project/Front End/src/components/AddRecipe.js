import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../services/recipeService';
import FormInput from './FormInput';
import './AddRecipe.css';

function AddRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        categoryId: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);  // Show loading indicator

        try {
            const response = await addRecipe({
                name: recipe.name,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                categoryId: isNaN(parseInt(recipe.categoryId)) ? 0 : parseInt(recipe.categoryId)
            });

            alert(response.message || 'Recipe added successfully!');
            navigate('/recipes');
        } catch (error) {
            console.error('Error adding recipe:', error.response?.data || error.message);

            if (error.response) {
                alert(`Failed to add recipe: ${error.response.data?.message || 'Server error. Please try again.'}`);
            } else if (error.request) {
                alert('No response received from server. Check your network connection.');
            } else {
                alert(`Error: ${error.message}`);
            }
        } finally {
            setIsLoading(false);  // Hide loading indicator
        }
    };

    return (
        <div className="add-recipe-container">
            <h1>Add New Recipe</h1>
            {isLoading && <p>Adding recipe... Please wait.</p>}
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" name="name" value={recipe.name} onChange={handleChange} required />
                <FormInput label="Ingredients" type="textarea" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
                <FormInput label="Instructions" type="textarea" name="instructions" value={recipe.instructions} onChange={handleChange} required />
                <FormInput label="Category ID" type="number" name="categoryId" value={recipe.categoryId} onChange={handleChange} required />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Recipe'}
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;
