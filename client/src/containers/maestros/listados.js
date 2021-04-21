import React, {useState} from 'react'
import '../../components/Navbar.css'
import NavbarMaestro from './NavbarMaestro';

const Listados=()=>{
    return(<>
        <NavbarMaestro>
        </NavbarMaestro><br></br>
        <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Pagina Principal</button>
        </div>
        <div class="btn-group btn-right" role="group" aria-label="Basic outlined example">
            
            <button type="button" class="btn btn-outline-primary">Atras</button>
            <button type="button" class="btn btn-outline-primary">Cerrar Sesión</button>
            </div><br></br><br></br>
        <div>
            <h4>Listado Estudiantes</h4>
        </div><br></br>
        <div class="divtabla">
        <table class="table .table-bordered tablahistorial">
        <thead>
        <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Alumno</th>
      <th scope="col">Telefono</th>
      <th scope="col">Correo</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>99882256</td>
      <td>mark@gmail.com</td>
      <td><button type="button" class="btn btn-link">Editar</button><button type="button" class="btn btn-link">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Thornton</td>
      <td>98564323</td>
      <td>jacob@gmail.com</td>
      <td><button type="button" class="btn btn-link">Editar</button><button type="button" class="btn btn-link">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Carlos Reyes</td>
      <td>95679342</td>
      <td>carlos@gmail.com</td>
      <td><button type="button" class="btn btn-link">Editar</button><button type="button" class="btn btn-link">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Maria Thornton</td>
      <td>87956342</td>
      <td>Maria@gmail.com</td>
      <td><button type="button" class="btn btn-link">Editar</button><button type="button" class="btn btn-link">Eliminar</button></td>
            </tr>
            </tbody>
        </table>
    </div><br></br>
    <div>
    <button type="button" class="btn btn-primary">Agregar</button>
    </div>
</>)    
}

export default Listados;