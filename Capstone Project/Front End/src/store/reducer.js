import {
    FETCH_RECIPES_SUCCESS,
    ADD_RECIPE_SUCCESS,
    UPDATE_RECIPE_SUCCESS,
    DELETE_RECIPE_SUCCESS,
    API_ERROR
} from './Actions';

const initialState = {
    recipes: [],
    error: null
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_SUCCESS:
            return { ...state, recipes: action.payload, error: null };

        case ADD_RECIPE_SUCCESS:
            return { ...state, recipes: [...state.recipes, action.payload], error: null };

        case UPDATE_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: state.recipes.map((recipe) =>
                    recipe.id === action.payload.id ? action.payload : recipe
                ),
                error: null
            };

        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
                error: null
            };

        case API_ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};

export default recipeReducer;
