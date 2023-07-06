require ('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Diet } = require('../db');

module.exports = async (req, res) => {
    try {
      
        //? HAGO LA PETICION PARA TRAER LA INFO DE LA API
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5&addRecipeInformation=true`);

        //? GUARDO LA RESPUESTA Y RECORRO EL ARRAY DE OBJETOS PARA TRAER LA INFO NECESARIA
        const diets = response.data.results.map(recipe => {
            return {
            vegetarian: recipe.vegetarian,
            vegan: recipe.vegan,
            glutenFree: recipe.glutenFree,
            diet: recipe.diet.map(diet => diet.diet),
           }
        });   

        //? GUARDAR TODAS LAS DIETAS EN LA BASE DE DATOS
        await Diet.bulkCreate(diets, { ignoreDuplicates: true });
    
        console.log('Dietas precargadas en la base de datos');
        return res.status(200).json(diets);

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}