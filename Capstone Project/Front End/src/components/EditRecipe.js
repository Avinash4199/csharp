import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from './FormInput';
import './EditRecipe.css';

function EditRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        categoryId: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://localhost:7205/api/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7205/api/recipes/${id}`, recipe);
            alert('Recipe updated successfully!');
            navigate('/recipes');
        } catch (error) {
            console.error('Error updating recipe:', error);
            alert('Failed to update recipe. Please try again.');
        }
    };

    return (
        <div className="edit-recipe-container">
            <h1>Edit Recipe</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" name="name" value={recipe.name} onChange={handleChange} required />
                <FormInput label="Ingredients" type="textarea" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
                <FormInput label="Instructions" type="textarea" name="instructions" value={recipe.instructions} onChange={handleChange} required />
                <FormInput label="Category ID" type="number" name="categoryId" value={recipe.categoryId} onChange={handleChange} required />
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
}

export default EditRecipe;