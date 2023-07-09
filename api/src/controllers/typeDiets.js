require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Diet } = require("../db");

module.exports = async (req, res) => {
  try {
    //? HAGO LA PETICION PARA TRAER LA INFO DE LA API

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );

    /* console.log(data); */

    //? GUARDO LA RESPUESTA Y RECORRO EL ARRAY DE OBJETOS PARA TRAER LA INFO NECESARIA
    let diets = [];

    /*  data.results[0].diets.map(diet => {
                if(!diets.includes(diet)) diets.push(diet); 
              })  */

    data.results.forEach((recipe) => {

      recipe.diets.forEach((diet) => {

        if (!diets.includes(diet)) {
          diets.push(diet);
        }
        
      });

    });
  
       //? GUARDAR TODAS LAS DIETAS EN LA BASE DE DATOS
    /* await Diet.create({where: {diets}}); */
    diets.forEach(async (diet) => {
        await Diet.create({ name: diet });
      });
      
      return diets;
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};