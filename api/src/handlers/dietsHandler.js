//*CONTROLLERS
/* ------------------------------------------------------------- */ 
const { Diet } = require('../db');
const typeDiets = require('../controllers/typeDiets');
/* ------------------------------------------------------------- */ 

const getDiets = async (req, res) => {
    try {
        let typesDiets;
    
         //! Verificar si existen dietas en la base de datos
        const existingDiets = await Diet.findAll();
    
    
        //? Si hay dietas en la base de datos, retornarlas como respuesta
         if(existingDiets.length > 0) {
          return res.status(200).json(existingDiets);
        } 
        else {
        //! Si no hay dietas en la base de datos, obtener y guardar las dietas desde la API
        typesDiets = await typeDiets();
        }

        return res.status(201).json(typesDiets);
        
    } 
      catch (error) {
          return res.status(500).json({error: error.message})
      };
};
/* ------------------------------------------------------------- */ 

module.exports = getDiets
/* ------------------------------------------------------------- */ 