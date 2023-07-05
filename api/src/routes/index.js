const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesController = require('../controllers/recipesController');
const dietsController = require('../controllers/dietsController');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesController);
router.use('/diets', dietsController);

module.exports = router;