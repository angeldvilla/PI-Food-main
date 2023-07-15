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
    filterRecipesStorage: [],
    filterOrder: [],
    filterDiets: [],
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
            filterRecipesStorage: action.payload,
            filterOrder: action.payload,
            filterDiets: action.payload,
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
            
            let api = state.filterOrder.filter(id => typeof(id.id) !== 'string');

            let db = state.filterOrder.filter(id => typeof(id.id) === 'string');
    

            if(action.payload === 'Api'){
                return {
                    ...state,
                    allRecipes: [...api],
                    filterRecipesStorage: [...api],
                    filterDiets: [...api],
                }; 
            }
            else {
                return {
                    ...state,
                    allRecipes: [...db],
                    filterRecipesStorage: [...db],
                    filterDiets: [...db],
                }; 
            }
        

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

        return;

        // case FILTER_DIETS: {
        //     /*  console.log(state.filterDiets);
                
        //         console.log(state.filterRecipesStorage); */
        //     // let dietsFilter = [];

        //     // state.filterRecipesStorage.length  !== state.filterDiets.length 
        //     // ? (

        //     //     dietsFilter = state.filterRecipesStorage 
                
        //     // ) 
        //     // : (
        //     // /* const filteredDiets = state.filterOrder.filter((recipe) =>  recipe.diets.includes(action.payload) ); */
    
        //     //     dietsFilter = state.filterDiets
        //     // )

        //     // const filteredDiets = dietsFilter.map((recipe) =>  recipe.diets.includes(action.payload) );

        //     return {
                
        //     };

        // };

        case FILTER_DIETS: {
            console.log(state.filterRecipesStorage.length);
            console.log(state.filterDiets.length);


            let dietsFilter = [];


            state.filterDiets.map(recipe => {
                    
                if(recipe.diets.includes(action.payload))
                    {
                        dietsFilter.push(recipe);
                    } 
                })
                return {
                ...state,
                allRecipes: [...dietsFilter],
                filterRecipesStorage: [...dietsFilter]
                }
            }
        

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
        

        case RESET_FILTERS: 
        return {
            ...state,
            allRecipes: [...state.reset],
            filterRecipesStorage: [...state.reset],
            filterOrder: [...state.reset],
            filterDiets: [...state.reset]
        };

        default: 
        return {...state};
};

}   

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