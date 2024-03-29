const { request, response } = require("express");
const Calificaciones = require('../models').Calificacion;
const Estudiantes = require('../models').Estudiante;
const Idiomas = require('../models').Idioma;

const getCalificaciones = async (req = request, res = response) => {

    let calificaciones = await Calificaciones.findAll();

    res.send(calificaciones);
}

const getCalificacion = async (req = request, res = response) => {

    let calificacion = await Calificaciones.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send(calificacion);
}

const editarCalificaciones = async (req = request, res = response) => {
    let calificaciones = await Calificaciones.findByPk(req.params.id)

    if (calificaciones) {

        await calificaciones.update({
            nota: req.body.nota,
            estado: req.body.estado,
        });
    }
    res.send(calificaciones); res.send({ mensaje: 'Peticion put' });
}

const eliminarCalificaciones = async (req = request, res = response) => {
    //let calificacion = 
    await Calificaciones.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({ ok: true });
}

const agregarCalificaciones = async (req = request, res = response) => {

    let newCalificaciones = await Calificaciones.create({
        nota: req.body.nota,
        estado: req.body.estado,
        EstudianteId: req.body.EstudianteId,
        IdiomaId: req.body.IdiomaId


    });

    res.send(newCalificaciones);
}

const getCalificacionPorEstudiante = async (req = request, res = response) => {

    let calificacion = await Calificaciones.findAll({
        where: {
            EstudianteId: req.params.id
        },
        include: [
            { model: Idiomas }
        ]
    });
    res.send(calificacion);
}



module.exports = {
    getCalificacion,
    editarCalificaciones,
    agregarCalificaciones,
    eliminarCalificaciones,
    getCalificaciones,
    getCalificacionPorEstudiante
}