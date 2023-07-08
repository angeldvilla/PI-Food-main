require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

module.exports = async (idRecipe) => {
  try {
    
    if (isNaN(Number(idRecipe))) {
      const recipeDb = await Recipe.findByPk(idRecipe, {
        include: {
          model: Diet,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
    
      if (!recipeDb) throw Error("Recipe dont exist");
    
      return recipeDb;
    } 
    
    else {
    
      //* SI ES UN NUMERO HACEMOS LA PETICION A LA API PASANDOLE EL ID QUE LLEGA POR PARAMS
      const { data } = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`);
    
      //* SE CREA UN OBJETO CON LAS PROPIEDADES NECESARIAS EXTRAIDAS DE LA RESPUESTA
     
      let apiRecipe = data
         
        if(apiRecipe.title){
          const response = {
              title: apiRecipe.title,
              image: apiRecipe.image,
              summary: apiRecipe.summary,
              healthScore: apiRecipe.healthScore,
              vegetarian: apiRecipe.vegetarian,
              vegan: apiRecipe.vegan,
              glutenFree: apiRecipe.glutenFree,
              diet: apiRecipe.diets,
              stepByStep: apiRecipe.analyzedInstructions[0]?.steps.map((step) => {
                let steps = `Step ${step.number} : ${step.step}`;

                let ingredients = step.ingredients.map(
                  (ingredient) => `Ingredient : ${ingredient.name}`
                );
                return [steps, ...ingredients];
              }),
          }
          //* Y SE RETORNA LA RECETA ESPECIFICA BUSCADA
          return response;
        }
          
    }
    
  } catch (error) {
    return { error: `Doesnt exists the recipe with ID ${idRecipe}` };
  }
};