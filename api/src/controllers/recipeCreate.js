const { Recipe } = require('../db');


module.exports = async ({ title, image, summary, healthScore, stepByStep, diets }) => {
 
const recipeNew = await Recipe.create({
    title, 
    image, 
    summary, 
    healthScore, 
    stepByStep,
 });
  
  recipeNew.addDiets(diets);

 return recipeNew;
}