//*CONTROLLERS
//-------------------------------------------------------------
const getAllRecipes = require('../controllers/getAllRecipes');
const getRecipeByName = require('../controllers/getRecipeByName');
const recipeById = require('../controllers/recipeById');
const recipeCreate = require('../controllers/recipeCreate');
//-------------------------------------------------------------

const allRecipes = async (req, res) => {
    try {
        const { title } = req.query;

        if(title){
            const name = await getRecipeByName(title);
            /* console.log(name); */
            if(name.length) return res.status(200).json(name);

            return res.status(404).send('Recipe not found');
         }

        const allRecipes = await getAllRecipes();

        //?RETORNO LA RESPUESTA COMPLETA TANTO LOS DATOS DE LA API COMO LA DB
        return res.status(200).json(allRecipes); 

  } catch (error) {
      return res.status(500).json({error: error.message})
  };
}


const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params;
    try {
        const recipeFound = await recipeById(idRecipe);
        return res.status(200).json(recipeFound);
    }
     catch (error) {
        return res.status(500).json({
            error: error.message
        });
    };
}

const createRecipe = async (req, res) => {
    try{
        const { title, image, summary, healthScore, stepByStep, diets } = req.body; 
          if(!title || !image || !summary || !healthScore || !stepByStep ) {
            return res.status(400).send('Missing data');
          }
          const newRecipe = await recipeCreate({
            title,
            image,
            summary,
            healthScore,
            stepByStep,
            diets,
          });
  
          return res.status(200).json(newRecipe);
  
      } catch(error){
        return res.status(500).json({ error: error.message });
      };
}


module.exports = {
    allRecipes,
    getRecipeById,
    createRecipe
}