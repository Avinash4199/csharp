import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeReducer from './reducer';

// Create Redux Store
const store = createStore(
    recipeReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
