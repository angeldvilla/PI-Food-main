/* ----------------- */
import {ALL_RECIPES, 
        RECIPE_DETAIL, 
        CREATE_RECIPE, 
        GET_DIETS, 
        FILTER_RECIPES,
        FILTER_DIETS,
        ORDER_RECIPES,
        RESET_FILTERS} from '../actions/action-types';
/* ----------------- */

const initialState = {
    allRecipes: [],
    filterRecipes: [],
    filterOrder: [],
    recipeDetail: {},
    diets:[],
    reset:[],
}

const recipesReducer = (state = initialState, action) => {
    switch(action.type) {

        case ALL_RECIPES: 
        return {
            ...state,
            allRecipes: action.payload,
            filterRecipes: action.payload,
            filterOrder: action.payload,
            reset: action.payload,
        };

        case RECIPE_DETAIL: 
        return {
            ...state,
            recipeDetail: action.payload
        };

        case GET_DIETS: 
        return {
            ...state,
            diets: action.payload
        };

        case CREATE_RECIPE: 
        return {
            ...state,
            allRecipes: [...state.allRecipes, action.payload]
        };

        case FILTER_RECIPES:
            
            let api = state.filterOrder.filter(id => typeof(id.id) !== 'string')
            let db = state.filterOrder.filter(id => typeof(id.id) === 'string')

            if(action.payload === 'Api'){
                return {
                    ...state,
                    allRecipes: [...api],
                    filterRecipes: [...api]
                }; 
            }
            else {
                return {
                    ...state,
                    allRecipes: [...db],
                    filterRecipes: [...db]
                }; 
            }
        

        case ORDER_RECIPES:
            if(action.payload === 'A-Z'){
                
                let ascending =  state.filterRecipes.sort((a,b) => a.title.localeCompare(b.title) ) 
                
                return {
                    ...state,
                    allRecipes: [...ascending],
                    filterRecipes: [...ascending]
                }
            }
            
            else if(action.payload === 'Z-A'){
                let descending =  state.filterRecipes.sort((a,b) => b.title.localeCompare(a.title) ) 
                return {
                    ...state,
                    allRecipes: [...descending],
                    filterRecipes: [...descending]
                }  
            }
           
             else if(action.payload === 'Asc'){
                let asc =  state.filterRecipes.sort((a,b) => a.healthScore - b.healthScore )
                 return {
                    ...state,
                    allRecipes: [...asc],
                    filterRecipes: [...asc]
                 }
             }

             else if(action.payload === 'Desc'){
                let desc =  state.filterRecipes.sort((a,b) => b.healthScore - a.healthScore )
                return {
                   ...state,
                   allRecipes: [...desc],
                   filterRecipes: [...desc]
                }
             }

        break;

        case FILTER_DIETS: {
            const filteredDiets = state.filterOrder.filter((recipe) =>  recipe.diets.includes(action.payload) );
                  return {
                    ...state,
                    allRecipes: [...filteredDiets],
                    filterRecipes: [...filteredDiets]
                  };
        };

        case RESET_FILTERS: 
        return {
            ...state,
            allRecipes: [...state.reset]
        };

        default: 
        return {...state};
    };

};   

export default recipesReducer;



/*  case SEARCH_RECIPE:
       
        const filteredRecipes = state.allRecipes.filter(ele =>
            ele.title.toLowerCase().includes(action.payload)
        );
        
        return{
            ...state,
            recipesByName: filteredRecipes,
        }; 
        
*/