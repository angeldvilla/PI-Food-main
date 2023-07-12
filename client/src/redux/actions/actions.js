/* ----------------- */
import {ALL_RECIPES,  CREATE_RECIPE,  GET_DIETS,  RECIPE_DETAIL} from './action-types';
import axios from 'axios';
/* ----------------- */
const URL_API = `http://localhost:3001/recipes`;

export const getAllRecipes = (recipes) => {
    return async (dispatch) => {
        try {

        const { data } = await axios.get(`${URL_API}`, recipes);

     /*    const recipes = data.results.map(recipe => {
            return {
                id: recipe.id,
                title : recipe.name,
                summary: recipe.summary.replace(/<[^>]+>/g, ''),
                healthScore: recipe.healthScore,
                stepByStep: recipe.stepByStep,
                diets: recipe.diets.map(diet => diet.name),
            }
        }) */

        dispatch({
            type: ALL_RECIPES,
            payload: data,
        })
            
        } catch (error) {
            return { error: 'Not found recipes'}
        }
    };
};


export const getDiets = () => {
    return async (dispatch) => {
        try {   
           const { data } = await axios.get(`${URL_API}/diets`);

            dispatch({
                type:GET_DIETS,
                payload : data,
            });

        } catch (error) {
          return { error: 'Not found diets'}
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
        return { error: 'recipe fail detail'}
        }

    };
};

export const newRecipe = (recipeCreate) => {
    return async (dispatch) => {
        try {
            /* const { title, image, summary, healthScore, stepByStep, diets } = recipeCreate; */

            const { data } = await axios.post(`${URL_API}/create`, recipeCreate)
            
            dispatch({
                type: CREATE_RECIPE,
                payload: data,
            });

        } catch (error) {
          return { error: 'recipe fail create'}
        }
    }
};