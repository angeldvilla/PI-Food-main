//*IMPORTS ARCHIVOS, MODELOS Y SERVER
//-------------------------------------------------------------
require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Router } = require('express');
const dietsRoutes = Router();
const { Diet } = require('../db');
const getDiets = require('../utils/getDiets');
//-------------------------------------------------------------
//*IMPORTS ARCHIVOS, MODELOS Y SERVER

dietsRoutes.get('/', async (req, res) => {
    try {
     //! Verificar si existen dietas en la base de datos
    const existingDiets = await Diet.findAll();

     if(existingDiets.length){ 
         //? Si hay dietas en la base de datos, retornarlas como respuesta
        return res.status(200).json(existingDiets);
     }

     //! Si no hay dietas en la base de datos, obtener y guardar las dietas desde la API
     await getDiets();

     //* Obtener las dietas desde la base de datos después de precargarlas
     const diets = await Diet.findAll();

     return res.status(200).json(diets);
    
  } catch (error) {
      return res.status(500).json({error: error.message})
  };

    },
);


module.exports = dietsRoutes