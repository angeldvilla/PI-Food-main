//*IMPORTS ARCHIVOS, MODELOS Y SERVER
//-------------------------------------------------------------
const { Router } = require('express');
const recipesRoutes = Router();
//-------------------------------------------------------------

//*CONTROLLERS
//-------------------------------------------------------------
const getRecipeById = require('../controllers/getRecipeByIdController');
const allRecipes = require('../controllers/allRecipesController');
const createRecipe = require('../controllers/createRecipeController');
/* const updateRecipe = require('../controllers/updateRecipeController'); 
const deleteRecipe = require('../controllers/deleteRecipeController'); */
//-------------------------------------------------------------


//-------------------------------------------------------------
//!RUTA PARA TRAER TODAS LAS RECETAS Y POR TITLE

recipesRoutes.get('/', allRecipes);
//-------------------------------------------------------------


//!RUTA PARA MOSTRAR EL DETALLE DE UNA RECETA ESPECIFICA

recipesRoutes.get('/:idRecipe', getRecipeById);
//-------------------------------------------------------------

//!RUTA PARA TRAER CREAR UNA RECETA Y GUARDARLA EN LA BASE DE DATOS

recipesRoutes.post('/create', createRecipe);
//-------------------------------------------------------------

//!RUTA PARA MODIFICAR UNA RECETA
/* recipesRoutes.put('/edit', updateRecipe); */

//!RUTA PARA HACER UN BORRADO LÓGICO
/* recipesRoutes.put('/delete', deleteRecipe); */


module.exports = recipesRoutes