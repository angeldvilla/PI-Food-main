/* ----------------- */
import axios from 'axios';

import {ALL_RECIPES,  
        CREATE_RECIPE,  
        GET_DIETS,
        SEARCH_RECIPE,  
        RECIPE_DETAIL,       
        FILTER_RECIPES,
        FILTER_DIETS,  
        ORDER_RECIPES,
        LOADING } from './action-types';
/* ----------------- */

const URL_API = `http://localhost:3001/recipes`;
/* --------------------------------------------- */

export const loading = (isLoading) => {
    return{
        type: LOADING,
        payload: isLoading
    }
}
/* --------------------------------------------- */

export const getAllRecipes = () => {
    return async (dispatch) => {
     try {
         dispatch(loading(true));
         
         const { data } = await axios.get(`${URL_API}`);
         
         dispatch({
             type: ALL_RECIPES,
             payload: data
         })
         
         dispatch(loading(false));
         
     } catch (error) {
        console.log(error);
      dispatch(loading(false));
     }  
    }
}
/* --------------------------------------------- */

export const searchRecipesByName = (title) => {
    
    return async (dispatch) => {
        try {
            dispatch(loading(true));

            const { data } = await axios.get(`${URL_API}?title=${title}`);

            dispatch({
                type: SEARCH_RECIPE,
                payload: data,
            })
            dispatch(loading(false));

        } catch (error) {
            console.log(error);
            dispatch(loading(false));
        }
    }
};
/* --------------------------------------------- */

export const getDiets = () => {
    return async (dispatch) => {
        try {   
            
            dispatch(loading(true));

           const { data } = await axios.get('http://localhost:3001/diets');

           
           dispatch({
               type:GET_DIETS,
               payload : data,
            });
            
            dispatch(loading(false));

        } catch (error) {
          console.log(error);
          dispatch(loading(false));
        }

    };
};
/* --------------------------------------------- */

export const getDetailRecipe = (id) => {
    return async (dispatch) => {
        try {
        dispatch(loading(true));

        const { data } = await axios.get(`${URL_API}/${id}`) 

        if(data.title){
            dispatch({
              type: RECIPE_DETAIL,
              payload: data,
            });
        }
         
        dispatch(loading(true));

        } catch (error) {
            console.log(error);
            dispatch(loading(false));
        }

    };
};
/* --------------------------------------------- */

export const newRecipe = (recipeCreate) => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const { data } = await axios.post(`${URL_API}/create`, recipeCreate)
            
            dispatch({
                type: CREATE_RECIPE,
                payload: data,
            });

            dispatch(loading(false));

        } catch (error) {
            console.log(error);
            dispatch(loading(false));
        }
    }
};
/* --------------------------------------------- */

export const filterRecipes = (filterType) => {
    return{
        type: FILTER_RECIPES,
        payload: filterType,
    }
};
/* --------------------------------------------- */

export const orderRecipes = (orderType) => {
    return{
        type: ORDER_RECIPES,
        payload: orderType
    }
        
};

export const filterDiets = (dietType) => {
    return{
        type: FILTER_DIETS,
        payload: dietType,
    }
}
/* --------------------------------------------- */



/* export const resetFilters = () => {
    return {
        type: RESET_FILTERS
    }
}; */









/* export const editRecipe = (recipeUpdate) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL_API}/edit/${recipeUpdate.id}`)
            
            dispatch({
                type: UPDATE_RECIPE,
                payload: data,
            });

        } catch (error) {
            console.log(error);
        }
    }
}; */
/* --------------------------------------------- */

/* export const deleteRecipe = (recipeDelete) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL_API}/delete`, recipeDelete)
            
            dispatch({
                type: DELETE_RECIPE,
                payload: data,
            });

        } catch (error) {
            console.log(error);
        }
    }
}; */

/* --------------------------------------------- */

/* export const getAllRecipes = (title) => {
    return async (dispatch) => {
        try {
        
        let response;   
        
        if(title) {
            response = await axios.get(`${URL_API}?title=${title}`);
        }

        else 
        {
            response = await axios.get(`${URL_API}`);
        }
    
        const { data } = response;

        return (
            dispatch({
                type: ALL_RECIPES,
                payload: data,
            })
            )

        } catch (error) {
            console.log(error);
        }
    };
}; 
*/

/* --------------------------------------------- */