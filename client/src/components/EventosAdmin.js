import React from 'react'
import * as FaIcons from "react-icons/fa";
import '../css/usuarios.css'

export const EventosAdmin = () => {

    const CrearEvento = () => {
        window.location.href = '/crear-evento';
    }
    const listaEventos = () => {
        window.location.href = '/lista-evento';
    }
    return (
        <div className="text-center" >
            <div className="imgEditPanel">
                <h1>Eventos</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br/>
                <div className="row">
                    <div className="col-md-4 offset-sm-2">
                        <div><FaIcons.FaCalendarCheck className="fa-Icono" onClick={CrearEvento} /></div>
                        <div><h3>Crear Evento</h3></div>
                    </div>

                    <div className="col-md-4 offset-sm-2 ">
                        <div><FaIcons.FaCalendarAlt className="fa-Icono" onClick={listaEventos} /></div>
                        <div><h3>Lista de Eventos</h3></div>
                    </div>
                </div>
            </div >
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
        </div>
    )
}
