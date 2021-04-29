import React from 'react'

export const Maestros = () => {
    const listaMaestro = () => {
        window.location.href = '/lista-maestro';
      }
      const crearmaestro = () => {
        window.location.href = '/crear-maestro';
      }
    return (
        <div className="text-center" >
            Maestros

            <div><button type="button" class="btn btn-info" onClick={listaMaestro}>Lista de Maestros</button></div>
            <div><button type="button" class="btn btn-info" onClick={crearmaestro}>Crear Maestro</button></div>
        </div>
    )
}
