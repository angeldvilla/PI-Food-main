const DataTypes  = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* ------------------------------------------------------------- */ 
module.exports = (sequelize) => {
  // defino el modelo
/* ------------------------------------------------------------- */ 
  sequelize.define('diet', {
    id:{
     /*  type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 */
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },
  
  {timestamps: false},

  );
};
/* ------------------------------------------------------------- */ 