//*IMPORTS ARCHIVOS
//-------------------------------------------------------------
require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe } = require('../db');
const { Op } = require('sequelize');
//-------------------------------------------------------------
//*IMPORTS ARCHIVOS

//! EXPORTO DIRECTAMENTE LA FUNCION 

module.exports = async (title) => {
    //* SE PASA POR PARAMETRO EL TITLE QUE VIENE DE LA QUERY 
    try {
        //? SE DEFINE EL TITLE EN MINUSCULAS PARA QUE NO HAYA PROBLEMAS DE TIPEO SIN IMPORTAR MIN O MAY
        let name = title.toLowerCase();
    
        const [apiRecipes, recipesDb] =  await Promise.all([
        //* SE DEFINE LA RESPUESTA DE LA API
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&titleMatch=${name}&addRecipeInformation=true`),
        
        //* INFO DB
        Recipe.findAll({
          where: { 
            title: { 
              [Op.iLike]: `%${name}%` 
            }
            } 
          })
        ]);
      
        //? SE EXTRAE LA INFO NECESARIA
        let responseQuery = apiRecipes.data.results.map(recipe => {
        return {
          title: recipe.title,
          image: recipe.image,
          summary: recipe.summary,
          healthScore: recipe.healthScore,
          vegetarian: recipe.vegetarian,
          vegan: recipe.vegan,
          glutenFree: recipe.glutenFree,
          diet: recipe.diets,
          stepByStep: recipe.analyzedInstructions[0]?.steps.map(step => {
          let steps = `Step ${step.number} : ${step.step}`        
          let ingredients = step.ingredients.map(ingredient => `Ingredient : ${ingredient.name}`
                    )
          return [steps, ...ingredients]
          })
        }});

        //? SE RETORNA LA RESPUESTA CON LA INFO YA EXTRAIDA! 
         const Namesrecipes = [...responseQuery, ...recipesDb];

        return Namesrecipes;
    }
    catch(error){
     return { error: `Recipe with title ${title} doesnt exist `}
    }
        
}