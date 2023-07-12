require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');

module.exports = async () => {
    try{
        const [apiResponse, dbResponse] = await Promise.all([
            //* INFO API 
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=2&addRecipeInformation=true`),
        
            //* INFO DB
            Recipe.findAll({ 
                include: { 
                model: Diet,
                attributes: ["name"],
                through: {
                attributes: [],
                },
             },
            }),
        ]);
        
         //* INFO API RECORRO LA RESPUESTA Y TRAIGO LOS DATOS IMPORTANTES 
         const apiRecipes = apiResponse.data.results.map(recipe => {
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
         }})
        
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
        
        //* TRAIGO LA COPIA DE LA RESPUESTA DE LA API Y LA CONCATENO CON LA RESPUESTA DE LA BASE DE DATOS
        const allRecipes = [...apiRecipes, ...dbRecipes];
    
        return allRecipes;
} 

    catch(error){
        return {error: 'No recipes matches found'};
    }
    
}