require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Diet } = require("../db");

module.exports = async (req, res) => {
  try {
    let typeDiets = [];
    
    
    //? HAGO LA PETICION PARA TRAER LA INFO DE LA API
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );

    //? GUARDO LA RESPUESTA Y RECORRO EL ARRAY DE OBJETOS PARA TRAER LA INFO NECESARIA

    /*  data.results[0].diets.map(diet => {
                if(!diets.includes(diet)) diets.push(diet); 
          })  */

    data.results.forEach((recipe) => {

      recipe.typeDiets.forEach((diet) => {

        if (!typeDiets.includes(diet)) {
          typeDiets.push(diet);
        }
        
      });

    });
  
      //? GUARDAR TODAS LAS DIETAS EN LA BASE DE DATOS
    /* await Diet.bulkCreate({where: {diets}}); */
    typeDiets.forEach(async (diet) => {
        await Diet.create({ name: diet });
      });
      
      return typeDiets;
    
  } catch (error) {
    return { error: 'Get diets fail' };
  }
};