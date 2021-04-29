import React from 'react'
import * as FaIcons from "react-icons/fa";
import '../css/usuarios.css'

export const Maestros = () => {

  const listaMaestro = () => {
    window.location.href = '/lista-maestro';
  }
  const crearmaestro = () => {
    window.location.href = '/crear-maestro';
  }
  return (
    <div className="text-center" >
      <div className="imgEditPanel">
        <h1>Maestros</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-4 offset-sm-1">
            <div><FaIcons.FaUserPlus className="fa-Icono" onClick={crearmaestro} /></div>
            <div><h3>Agregar Maestro</h3></div>
          </div>
          <div className="col-md-4 offset-sm-2">
            <div><FaIcons.FaList className="fa-Icono" onClick={listaMaestro} /></div>
            <div><h3>Lista de Maestros</h3></div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  )
}
