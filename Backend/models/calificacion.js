'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Calificacion.belongsTo(models.Estudiante)
      Calificacion.belongsTo(models.Idioma)
    }
  };
  Calificacion.init({
    nota: DataTypes.FLOAT,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Calificacion',
  });
  return Calificacion;
};