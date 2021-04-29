import React from 'react'

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
            Usuarios
            <div><button type="button" class="btn btn-success" onClick={Crearseccion}>Crear Seccion</button></div>
            <div><button type="button" class="btn btn-info" onClick={crearidioma}>Crear Idioma</button></div>
            <div><button type="button" class="btn btn-info" onClick={listaEstudiante}>Lista de Estudiantes</button></div>
            <div><button type="button" class="btn btn-info" onClick={listaIdiomas}>Lista de Cursos</button></div>
            <i className="fa fa-phone"></i> 
            
        </div>
        
       
    )
    
}
