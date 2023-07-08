const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesHandler = require('../handlers/recipesHandler');
const dietsHandler = require('../handlers/dietsHandler');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesHandler);
router.use('/diets', dietsHandler);

module.exports = router;