'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Estudiante.belongsTo(models.Persona)
      Estudiante.hasMany(models.Matricula)
      Estudiante.hasMany(models.EstudianteIdioma)
      Estudiante.hasMany(models.Calificacion)
    }
  };
  Estudiante.init({
    nombreUsuario: DataTypes.STRING,
    fechaRegistro: DataTypes.DATE,
    password: DataTypes.STRING,
    codigoSeguridad: DataTypes.STRING,
    fotoPerfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estudiante',
  });
  return Estudiante;
};