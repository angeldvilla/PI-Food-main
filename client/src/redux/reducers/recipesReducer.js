/* ACTIONS */
/* ----------------- */
import {ALL_RECIPES, 
    RECIPE_DETAIL, 
    CREATE_RECIPE, 
    GET_DIETS,
    SEARCH_RECIPE, 
    FILTER_RECIPES,
    FILTER_DIETS,
    ORDER_RECIPES,
    LOADING } from '../actions/action-types';
/* ----------------- */

const initialState = {
    allRecipes: [],
    recipesByName: [],
    filterRecipesStorage: [],
    filterOrder: [],
    filterDiets: [],
    recipeDetail: {},
    diets:[],
    loading: true
    /* reset:[], */
}
/* ------------------------------------------------------------- */ 

const recipesReducer = (state = initialState, action) => {
switch(action.type) {

    case ALL_RECIPES: 
    return {
        ...state,
        allRecipes: action.payload,
        filterRecipesStorage: action.payload,
        filterOrder: action.payload,
        filterDiets: action.payload,
        loading: true,
        /* reset: action.payload, */
    };
/* ------------------------------------------------------------- */ 

    case RECIPE_DETAIL: 
    return {
        ...state,
        recipeDetail: action.payload
    };
/* ------------------------------------------------------------- */ 

    case GET_DIETS: 
    return {
        ...state,
        diets: action.payload
    };
/* ------------------------------------------------------------- */ 

    case CREATE_RECIPE: 
    return {
        ...state,
        allRecipes: [...state.allRecipes, action.payload]
    };
/* ------------------------------------------------------------- */ 

    case SEARCH_RECIPE:
    return{
        ...state,
        recipesByName: action.payload,
        filterRecipesStorage: action.payload,
        filterOrder: action.payload,
        filterDiets: action.payload
    };
/* ------------------------------------------------------------- */ 

    case LOADING: 
    return {
        ...state,
        loading: action.payload,
    }
/* ------------------------------------------------------------- */

    case FILTER_RECIPES:
        
        let api = state.filterOrder.filter(id => typeof(id.id) !== 'string');

        let db = state.filterOrder.filter(id => typeof(id.id) === 'string');


        if(action.payload === 'Api'){
            return {
                ...state,
                allRecipes: [...api],
                recipesByName: [...api],
                filterRecipesStorage: [...api],
                filterDiets: [...api],
                
            }; 
        }
        else if(action.payload === 'Database') {
            return {
                ...state,
                allRecipes: [...db],
                recipesByName: [...db],
                filterRecipesStorage: [...db],
                filterDiets: [...db],
        
            }; 
        }
        else {
            return state;
        }
/* ------------------------------------------------------------- */ 

    case ORDER_RECIPES:
        if(action.payload === 'A-Z'){
            
            let ascending =  state.filterRecipesStorage.sort((a,b) => a.title.localeCompare(b.title) ) 
            
            return {
                ...state,
                allRecipes: [...ascending],
                filterRecipesStorage: [...ascending]
            }
        }
        
        else if(action.payload === 'Z-A'){
            let descending =  state.filterRecipesStorage.sort((a,b) => b.title.localeCompare(a.title) ) 
            return {
                ...state,
                allRecipes: [...descending],
                filterRecipesStorage: [...descending]
            }  
        }
       
         else if(action.payload === 'Asc'){
            let asc =  state.filterRecipesStorage.sort((a,b) => a.healthScore - b.healthScore )
             return {
                ...state,
                allRecipes: [...asc],
                filterRecipesStorage: [...asc]
             }
         }

         else if(action.payload === 'Desc'){
            let desc =  state.filterRecipesStorage.sort((a,b) => b.healthScore - a.healthScore )
            return {
               ...state,
               allRecipes: [...desc],
               filterRecipesStorage: [...desc]
            }
         }

    return state;
/* ------------------------------------------------------------- */ 

    case FILTER_DIETS: 
    
    let dietsFilter = state.filterDiets.filter(recipe => recipe.diets.includes(action.payload));

        return {
        ...state,
        allRecipes: [...dietsFilter],
        recipesByName: [...dietsFilter],
        filterRecipesStorage: [...dietsFilter],
        }
    
/* ------------------------------------------------------------- */

    default: 
    return {...state};
};

};  
/* --------------------------------------------- */

export default recipesReducer;
/* --------------------------------------------- */






/*  case SEARCH_RECIPE:
   
    const filteredRecipes = state.allRecipes.filter(ele =>
        ele.title.toLowerCase().includes(action.payload)
    );
    
    return{
        ...state,
        recipesByName: filteredRecipes,
    }; 
    
*/


/*   state.filterDiets.map(recipe => {
                
if(recipe.diets.includes(action.payload))
{
dietsFilter.push(recipe);
} 
}) */


// state.filterRecipesStorage.length  !== state.filterDiets.length 
        // ? (

        //     dietsFilter = state.filterRecipesStorage 
            
        // ) 
        // : (
        

        //     dietsFilter = state.filterDiets
        // )

       /*  const filteredDiets = state.filterOrder.filter((recipe) =>  recipe.diets.includes(action.payload) );
              return {
                ...state,
                allRecipes: [...filteredDiets],
                filterRecipesStorage: [...filteredDiets]
}; */


/*   const filteredRecipes = state.allRecipes.filter(ele =>
        ele.title.toLowerCase().includes(action.payload)
    ); 
*/
/* ------------------------------------------------------------- */

/*     case UPDATE_RECIPE: 

    const updatedRecipes = state.allRecipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
            return action.payload;
        }
        return recipe;
        });

    const updatedFilterRecipes = state.filterRecipesStorage.map((recipe) => {
        if (recipe.id === action.payload.id) {
            return action.payload;
        }
        return recipe;
        });

    return {
        ...state,
        allRecipes: updatedRecipes,
        filterRecipesStorage: updatedFilterRecipes,
        recipeDetail: action.payload
    }
/* ------------------------------------------------------------- */

/* case DELETE_RECIPE: 
return {
    ...state,
} */
/* ------------------------------------------------------------- */ 

 /*    case RESET_FILTERS: 
    return {
        ...state,
        allRecipes: [...state.reset],
        recipesByName:[...state.reset],
        filterRecipesStorage: [...state.reset],
        filterOrder: [...state.reset],
        filterDiets: [...state.reset]
    }; */
/* ------------------------------------------------------------- */