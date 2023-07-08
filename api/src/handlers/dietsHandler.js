//*IMPORTS ARCHIVOS, MODELOS Y SERVER
//-------------------------------------------------------------
const { Router } = require('express');
const dietsRoutes = Router();
//-------------------------------------------------------------


//*CONTROLLERS
//-------------------------------------------------------------
const getDiets = require('../controllers/getDietsController');
//-------------------------------------------------------------

//!RUTA PARA CARGAR LAS DIETAS
dietsRoutes.get('/', getDiets);


module.exports = dietsRoutes