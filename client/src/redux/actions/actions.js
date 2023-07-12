/* ----------------- */
import {ALL_RECIPES,  CREATE_RECIPE,  GET_DIETS,  RECIPE_DETAIL, SEARCH_RECIPE} from './action-types';
import axios from 'axios';
/* ----------------- */

const URL_API = `http://localhost:3001/recipes`;

export const getAllRecipes = (recipes) => {
    return async (dispatch) => {
        try {

        const { data } = await axios.get(`${URL_API}`, recipes);

        dispatch({
            type: ALL_RECIPES,
            payload: data,
        })
            
        } catch (error) {
            console.log(error);
        }
    };
};


export const getDiets = () => {
    return async (dispatch) => {
        try {   
           const { data } = await axios.get('http://localhost:3001/diets');
                dispatch({
                    type:GET_DIETS,
                    payload : data,
                });

        } catch (error) {
          console.log(error);
        }

    };
};

export const getDetailRecipe = (id) => {
    return async (dispatch) => {
        try {
        const { data } = await axios.get(`${URL_API}/${id}`) 
        if(data.title){
            dispatch({
              type: RECIPE_DETAIL,
              payload: data,
            });
        } else {
            alert('recipe fail detail')
        }
            
        } catch (error) {
            console.log(error);
        }

    };
};

export const searchRecipesByName = (title) => {

    return async (dispatch) => {
        try {
            await axios.get(`${URL_API}?title=${title}`);
            dispatch({
                type: SEARCH_RECIPE,
                payload: title,
            })
            
        } catch (error) {
            console.log(error);
        }
    }
};

export const newRecipe = (recipeCreate) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL_API}/create`, recipeCreate)
            
            dispatch({
                type: CREATE_RECIPE,
                payload: data,
            });

        } catch (error) {
            console.log(error);
        }
    }
};