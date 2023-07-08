const recipeById = require('../utils/recipeById');

module.exports = async (req, res) => {
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