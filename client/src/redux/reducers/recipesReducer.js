/* ----------------- */
import {ALL_RECIPES, RECIPE_DETAIL, CREATE_RECIPE, GET_DIETS, SEARCH_RECIPE} from '../actions/action-types';
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
        };

        case RECIPE_DETAIL: 
        return{
            ...state,
            recipeDetail: action.payload
        };

        case GET_DIETS: 
        return{
            ...state,
            diets: action.payload,
        };

        case CREATE_RECIPE: 
        return{
            ...state,
            allRecipes: [...state.allRecipes, action.payload],
        };

        case SEARCH_RECIPE:
       
        const filteredRecipes = state.allRecipes.filter(ele =>
            ele.title.toLowerCase().includes(action.payload)
        );
        
        return{
            ...state,
            recipesByName: filteredRecipes,
        };

        default: 
        return {...state};
    }

}   

export default recipesReducer;