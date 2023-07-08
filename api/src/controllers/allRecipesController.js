const getRecipeByName = require('../utils/getRecipeByName');
const getAllRecipes = require('../utils/getAllRecipes');

module.exports = async (req, res) => {
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