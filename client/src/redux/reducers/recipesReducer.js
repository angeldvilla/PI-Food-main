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
}
/* ------------------------------------------------------------- */ 

const recipesReducer = (state = initialState, action) => {
switch(action.type) {

    // Caso para actualizar todas las recetas en el estado y los filtros relacionados
    case ALL_RECIPES: 
    return {
        ...state,
        allRecipes: action.payload,
        filterRecipesStorage: action.payload,
        filterOrder: action.payload,
        filterDiets: action.payload,
        loading: false
    };
/* ------------------------------------------------------------- */ 
    // Caso para actualizar el detalle de una receta en el estado
    case RECIPE_DETAIL: 
    return {
        ...state,
        recipeDetail: action.payload,
        loading: false
       
    };
/* ------------------------------------------------------------- */ 
    // Caso para obtener la lista de dietas 
    case GET_DIETS: 
    return {
        ...state,
        diets: action.payload,
    };
/* ------------------------------------------------------------- */ 
    // Caso para agregar una nueva receta al estado
    case CREATE_RECIPE: 
    return {
        ...state,
        allRecipes: [...state.allRecipes, action.payload],
        loading: false   
    };
/* ------------------------------------------------------------- */ 
     // Caso para buscar recetas por nombre y actualizar los filtros relacionados
    case SEARCH_RECIPE:
    return{
        ...state,
        recipesByName: action.payload,
        filterRecipesStorage: action.payload,
        filterOrder: action.payload,
        filterDiets: action.payload,
        loading: false,
    };
/* ------------------------------------------------------------- */ 
    // Caso para actualizar el estado de carga (loading)
    case LOADING: 
    return {
        ...state,
        loading: action.payload,
    }
/* ------------------------------------------------------------- */

    // Caso para filtrar recetas por fuente (API o base de datos)
    case FILTER_RECIPES:
        
        const api = state.filterOrder.filter(id => typeof(id.id) !== 'string');

        const db = state.filterOrder.filter(id => typeof(id.id) === 'string');

        if(action.payload === 'Api'){
            return {
                ...state,
                allRecipes: api,
                recipesByName: api,
                filterRecipesStorage: api,
                filterDiets: api,    
            }; 
        }
        else if(action.payload === 'Database') {
            return {
                ...state,
                allRecipes: db,
                recipesByName: db,
                filterRecipesStorage: db,
                filterDiets: db,
            }; 
        }
        else {
            return state;
        }
/* ------------------------------------------------------------- */ 
    
    // Caso para ordenar las recetas según el criterio seleccionado
    case ORDER_RECIPES:
        if(action.payload === 'A-Z'){
            
            const ascending =  state.filterRecipesStorage.sort((a,b) => a.title.localeCompare(b.title) ) 
            
            return {
                ...state,
                allRecipes: [...ascending],
                filterRecipesStorage: [...ascending]
            }
        }
        
        else if(action.payload === 'Z-A'){
            const descending =  state.filterRecipesStorage.sort((a,b) => b.title.localeCompare(a.title) ) 
            return {
                ...state,
                allRecipes: [...descending],
                filterRecipesStorage: [...descending]
            }  
        }
       
         else if(action.payload === 'Asc'){
            const asc =  state.filterRecipesStorage.sort((a,b) => a.healthScore - b.healthScore )
             return {
                ...state,
                allRecipes: [...asc],
                filterRecipesStorage: [...asc]
             }
         }

         else if(action.payload === 'Desc'){
            const desc =  state.filterRecipesStorage.sort((a,b) => b.healthScore - a.healthScore )
            return {
               ...state,
               allRecipes: [...desc],
               filterRecipesStorage: [...desc]
            }
         }

    return state;
/* ------------------------------------------------------------- */ 
     // Caso para filtrar recetas por dieta y actualizar los filtros relacionados
    case FILTER_DIETS: 
    
    const dietsFilter = state.filterDiets.filter(recipe => recipe.diets.includes(action.payload));

        return {
        ...state,
        allRecipes: dietsFilter,
        recipesByName: dietsFilter,
        filterRecipesStorage: dietsFilter, 
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