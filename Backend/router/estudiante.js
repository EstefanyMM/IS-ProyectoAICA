const express = require('express');
const { getEstudiantes, editarEstudiante, agregarEstudiante, eliminarEstudiante, 
        getEstudiante, getIdiomasPorEstudiante, login, getEstudiantePorIdiomas,obtenerFoto, subirFoto, obtenercodigo } = require('../controllers/estudiante.controller');

const router = express.Router();

router.get('/', getEstudiantes);

router.get('/:id', getEstudiante);

router.post('/', agregarEstudiante);

router.put('/:id', editarEstudiante);

router.delete('/:id', eliminarEstudiante);

router.get('/idioma/:id', getEstudiantePorIdiomas);

router.post('/login', login);

router.put('/:id/subir', subirFoto);

router.get('/:id/obtenerFoto', obtenerFoto);

router.post('/restablecer-contrasena', obtenercodigo);


module.exports = router;