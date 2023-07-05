//*IMPORTS ARCHIVOS, MODELOS Y SERVER
//-------------------------------------------------------------
require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Router } = require('express');
const recipesRoutes = Router();
const { Recipe } = require('../db');
const getRecipeByName = require('../utils/getRecipeByName');
//-------------------------------------------------------------
//*IMPORTS ARCHIVOS, MODELOS Y SERVER


//-------------------------------------------------------------
//!RUTA PARA TRAER TODAS LAS RECETAS Y POR TITLE

recipesRoutes.get('/', async (req, res) => {
    try {
        const { title } = req.query;

        if(title){

            let data = await getRecipeByName(title);
            /* console.log(data); */
            if(data.length) return res.status(200).json(data);

            return res.status(404).send('Recipe not found');
         }

        const [apiResponse, dbResponse] = await Promise.all([
            //* INFO API 
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5&addRecipeInformation=true`),

            //* INFO DB
            Recipe.findAll(),
        ]);

        //* INFO API RECORRO LA RESPUESTA Y TRAIGO LOS DATOS IMPORTANTES 
        const apiRecipes = apiResponse.data.results.map(recipe => {
            return {
            title: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            vegetarian: recipe.vegetarian,
            vegan: recipe.vegan,
            glutenFree: recipe.glutenFree,
            diet: recipe.diets,
            stepByStep: recipe.analyzedInstructions[0]?.steps.map(step => {
            return `Step ${step.number} : ${step.step} `
            })
        }});

        //* TRAIGO LA COPIA DE LA RESPUESTA DE LA API Y LA CONCATENO CON LA RESPUESTA DE LA BASE DE DATOS
        const allRecipes = [...apiRecipes, ...dbResponse];

        //?RETORNO LA RESPUESTA COMPLETA TANTO LOS DATOS DE LA API COMO LA DB
        return res.status(200).json(allRecipes); 

  } catch (error) {
      return res.status(500).json({error: error.message})
  };
    },
);
//-------------------------------------------------------------


//!RUTA PARA MOSTRAR EL DETALLE DE UNA RECETA ESPECIFICA

recipesRoutes.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;
    
        //* INFO API 
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    
        const data = response.data;

        if(data.title) {
            const recipe = {
                    id,
                    title: data.title,
                    image: data.image,
                    summary: data.summary,
                    healthScore: data.healthScore,
                    vegetarian: data.vegetarian,
                    vegan: data.vegan,
                    glutenFree: data.glutenFree,
                    diet: data.diets,
                    stepByStep: data.analyzedInstructions[0]?.steps.map(step => {
                        return `Step ${step.number} : ${step.step} `
                    }),
                };
            return res.status(200).json(recipe); 
        }
    
        return res.status(404).json({error: error.message});
    
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    };
    
    },
);
//-------------------------------------------------------------

//!RUTA PARA TRAER CREAR UNA RECETA Y GUARDARLA EN LA BASE DE DATOS

recipesRoutes.post('/create', async (req, res) => {
    const { id, title, image, summary, healthScore, stepByStep } = req.body; 
      try{
          if(!title || !image || !summary || !healthScore || !stepByStep ) {
            return res.status(400).send('Missing data');
          }
    
          let newRecipe = await Recipe.create({
            id,
            title,
            image,
            summary,
            healthScore,
            stepByStep,
          });

          /* let recipe = await newRecipe.setDiet(id); */

          return res.status(200).json(newRecipe);

      } catch(error){
        return res.status(500).json({ error: error.message });
      }
    },
);
//-------------------------------------------------------------


module.exports = recipesRoutes