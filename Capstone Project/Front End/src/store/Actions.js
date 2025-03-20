import axios from 'axios';

// Action Types
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const API_ERROR = 'API_ERROR';

// Action Creators
export const fetchRecipes = () => async (dispatch) => {
    try {
        const response = await axios.get('https://localhost:7205/api/recipes');
        dispatch({ type: FETCH_RECIPES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: API_ERROR, payload: error.message });
    }
};

export const addRecipe = (recipe) => async (dispatch) => {
    try {
        const response = await axios.post('https://localhost:7205/api/recipes', recipe);
        dispatch({ type: ADD_RECIPE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: API_ERROR, payload: error.message });
    }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const response = await axios.put(`https://localhost:7205/api/recipes/${id}`, recipe);
        dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: API_ERROR, payload: error.message });
    }
};

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://localhost:7205/api/recipes/${id}`);
        dispatch({ type: DELETE_RECIPE_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: API_ERROR, payload: error.message });
    }
};