import axios from 'axios';

const API_BASE_URL = 'https://localhost:7205/api/recipes'; // Ensure the URL is correct

// Axios instance with SSL bypass for development only
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include token if required
    },
    httpsAgent: {
        rejectUnauthorized: false // Bypass SSL certificate issues (For development only)
    }
});

// Fetch all recipes
export const getRecipes = async () => {
    try {
        const response = await axiosInstance.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

// Fetch recipe by ID
export const getRecipeById = async (id) => {
    try {
        const response = await axiosInstance.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching recipe with ID ${id}:`, error);
        throw error;
    }
};

// Add a new recipe
export const addRecipe = async (recipeData) => {
    try {
        console.log(recipeData);
        const response = await axiosInstance.post('/', recipeData);
        return response.data;
    } catch (error) {
        console.error('Error adding recipe:', error);
        throw error;
    }
};

// Update an existing recipe
export const updateRecipe = async (id, updatedData) => {
    try {
        const response = await axiosInstance.put(`/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating recipe with ID ${id}:`, error);
        throw error;
    }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
    try {
        await axiosInstance.delete(`/${id}`);
    } catch (error) {
        console.error(`Error deleting recipe with ID ${id}:`, error);
        throw error;
    }
};
