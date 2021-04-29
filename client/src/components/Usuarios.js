import React from 'react'
import * as FaIcons from "react-icons/fa";
import '../css/usuarios.css'

export const Usuarios = () => {
  const Crearseccion = () => {
    window.location.href = '/crear-seciones';
  }
  const crearidioma = () => {
    window.location.href = '/crear-idioma';
  }
  const listaEstudiante = () => {
    window.location.href = '/lista-estudiante';
  }
  const listaIdiomas = () => {
    window.location.href = '/lista-idioma';
  }

  return (
    <div className="text-center" >
      <div className="imgEditPanel">
        <h1>Usuarios</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-4 offset-sm-1">
            <div><FaIcons.FaNewspaper className="fa-Icono" onClick={Crearseccion} /></div>
            <div><h3>Crear Seccion</h3></div>
          </div>
          <div className="col-md-4 offset-sm-2">
            <div><FaIcons.FaBookOpen className="fa-Icono" onClick={crearidioma} /></div>
            <div><h3>Crear Idioma</h3></div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 offset-sm-1 ">
            <div><FaIcons.FaUserCircle className="fa-Icono" onClick={listaEstudiante} /></div>
            <div><h3>Lista de Estudiantes</h3></div>
          </div>
          <div className="col-md-4 offset-sm-2">
            <div><FaIcons.FaBookReader className="fa-Icono" onClick={listaIdiomas} /></div>
            <div><h3>Lista de Cursos</h3></div>
          </div>
        </div>
      </div>
    </div >


  )

}
