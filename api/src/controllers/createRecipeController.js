const recipeCreate = require('../utils/recipeCreate');

module.exports = async (req, res) => {
  try{
      const { title, image, summary, healthScore, stepByStep, diet } = req.body; 
        if(!title || !image || !summary || !healthScore || !stepByStep ) {
          return res.status(400).send('Missing data');
        }
        const newRecipe = await recipeCreate({
          title,
          image,
          summary,
          healthScore,
          stepByStep,
          diet,
        });

        return res.status(200).json(newRecipe);

    } catch(error){
      return res.status(500).json({ error: error.message });
    }
}