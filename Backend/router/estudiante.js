const express = require('express');
const { getEstudiantes, editarEstudiante, agregarEstudiante, eliminarEstudiante, 
        getEstudiante, obtenerFoto, login, getEstudiantePorIdiomas, obtenercodigo, actualizarcontrasena, subirFoto} = require('../controllers/estudiante.controller');

const router = express.Router();

router.get('/', getEstudiantes);

router.get('/:id', getEstudiante);

router.post('/', agregarEstudiante);

router.put('/:id', editarEstudiante);

router.delete('/:id', eliminarEstudiante);

router.get('/idioma/:id', getEstudiantePorIdiomas);

router.post('/login', login);

router.post('/restablecer-contrasena', obtenercodigo);

router.put('/:id/actualizar-contrasena', actualizarcontrasena);

router.put('/:id/subir', subirFoto);

router.get('/:id/obtenerFoto', obtenerFoto);

module.exports = router;