//*IMPORTS ARCHIVOS
//-------------------------------------------------------------
require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');
const { Op } = require('sequelize');
//-------------------------------------------------------------
//*IMPORTS ARCHIVOS

//! EXPORTO DIRECTAMENTE LA FUNCION 

module.exports = async (title) => {
    //* SE PASA POR PARAMETRO EL TITLE QUE VIENE DE LA QUERY 
    try {
        //? SE DEFINE EL TITLE EN MINUSCULAS PARA QUE NO HAYA PROBLEMAS DE TIPEO SIN IMPORTAR MIN O MAY
        let name = title.toLowerCase();
    
        const [apiResponse, dbResponse] =  await Promise.all([
        //* SE DEFINE LA RESPUESTA DE LA API
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=2&titleMatch=${name}&addRecipeInformation=true`),
        
        //* INFO DB
        Recipe.findAll({
          where: { 
            title: { 
              [Op.iLike]: `%${name}%` 
            }
            },
            include: {
              model: Diet,
              attributes: ["name"],
              through: { attributes: [] },
            }, 
          })
        ]);
      
        //? SE EXTRAE LA INFO NECESARIA
        let apiRecipes = apiResponse.data.results.map(recipe => {
        return {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          summary: recipe.summary,
          healthScore: recipe.healthScore,
          stepByStep: recipe.analyzedInstructions[0]?.steps.map(step => {
            let steps = `Step ${step.number} : ${step.step}`        
            let ingredients = step.ingredients.map(ingredient => `Ingredient : ${ingredient.name}`
            )
            return [steps, ...ingredients]
          }),
          diets: recipe.diets,
        }});

        const dbRecipes = dbResponse.map(recipe => {
          return {
              id:recipe.dataValues.id,
              title:recipe.dataValues.title,
              image:recipe.dataValues.image ,
              healthScore:recipe.dataValues.healthScore,
              summary:recipe.dataValues.summary,
              stepByStep:recipe.dataValues.stepByStep,
              diets:recipe.dataValues.diets.map(diet=>diet.name)
          }
      });

        //? SE RETORNA LA RESPUESTA CON LA INFO YA EXTRAIDA! 
         const Namesrecipes = [...apiRecipes, ...dbRecipes];

        return Namesrecipes;
}
    catch(error){
     return { error: `Recipe with title ${title} doesnt exist `}
    }   
}