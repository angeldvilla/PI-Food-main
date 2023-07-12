/* ----------------- */
import {ALL_RECIPES, RECIPE_DETAIL, CREATE_RECIPE, GET_DIETS} from '../actions/action-types';
/* ----------------- */

const initialState = {
    allRecipes: [],
    recipeDetail: {},
    recipesByName: [],
    diets:[],
}

const recipesReducer = (state = initialState, action) => {
    switch(action.type) {

        case ALL_RECIPES: 
        return{
            ...state,
            allRecipes: action.payload,
            recipesByName: action.payload
        }

        case RECIPE_DETAIL: 
        return{
            ...state,
            recipeDetail: action.payload
        }

        case GET_DIETS: 
        return{
            ...state,
            diets: action.payload,
        }

        case CREATE_RECIPE: 
        return{
            ...state,
            allRecipes: [...state.allRecipes, action.payload],
        }

        default: 
        return {...state};
    }

}   

export default recipesReducer;