const { Recipe } = require('../db');


module.exports = async ({ title, image, summary, healthScore, stepByStep, diet }) => {
 
const recipeNew = await Recipe.create({
    title, 
    image, 
    summary, 
    healthScore, 
    stepByStep,
 });
  
  recipeNew.addDiets(diet);

 return recipeNew;
}