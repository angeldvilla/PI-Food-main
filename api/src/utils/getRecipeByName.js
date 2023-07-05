//*IMPORTS ARCHIVOS
//-------------------------------------------------------------
require ('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
//-------------------------------------------------------------
//*IMPORTS ARCHIVOS

//! EXPORTO DIRECTAMENTE LA FUNCION 

module.exports = async (title) => {
    //* SE PASA POR PARAMETRO EL TITLE QUE VIENE DE LA QUERY 
    
        //? SE DEFINE EL TITLE EN MINUSCULAS PARA QUE NO HAYA PROBLEMAS DE TIPEO SIN IMPORTAR MIN O MAY
        let name = title.toLowerCase();
    

        //* SE DEFINE LA RESPUESTA DE LA API
            const responseQuery = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
             
            //? SE EXTRAE LA INFO NECESARIA
            data = responseQuery.data.results;
             
            //? SE RETORNA LA RESPUESTA CON LA INFO YA EXTRAIDA! 
            return data;
}
