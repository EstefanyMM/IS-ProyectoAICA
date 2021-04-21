import React, {useState} from 'react'
import '../../components/Navbar.css'
import NavbarStudent from './navbarStudent';
const Historial=()=>{
    return(<>
        <NavbarStudent></NavbarStudent> <br></br>
        <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Pagina Principal</button>
        </div>
        <div class="btn-group btn-right" role="group" aria-label="Basic outlined example">
            
            <button type="button" class="btn btn-outline-primary">Atras</button>
            <button type="button" class="btn btn-outline-primary">Cerrar Sesión</button>
            </div><br></br><br></br>
        <div  class="informacion">Información general
            <div>
                <ul class="ulhistorial">
                    <li class="licentro">Centro: Academia de idiomas Europea</li>
                    <li>Nombre: Cinthia Sierra</li>
                </ul>
            </div>
        </div>
        <div>
            <h4>Historial</h4>
        </div><br></br>
        <div class="divtabla">
        <table class="table .table-bordered tablahistorial">
        <thead>
        <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Curso</th>
      <th scope="col">Año</th>
      <th scope="col">Calificacion</th>
      <th scope="col">Obs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2---</th>
      <td>Aleman</td>
      <td>2020</td>
      <td>80</td>
      <td>APR</td>
    </tr>
    <tr>
      <th scope="row">2---</th>
      <td>Aleman</td>
      <td>2020</td>
      <td>80</td>
      <td>APR</td>
    </tr>
    <tr>
      <th scope="row">2---</th>
      <td>Aleman</td>
      <td>2020</td>
      <td>80</td>
      <td>APR</td>
    </tr>
    <tr>
      <th scope="row">2---</th>
      <td>Aleman</td>
      <td>2020</td>
      <td>80</td>
      <td>APR</td>
    </tr>
    <tr>
      <th scope="row">2---</th>
      <td>Aleman</td>
      <td>2020</td>
      <td>80</td>
      <td>APR</td>
    </tr>
            </tbody>
        </table>
    </div><br></br>
    
</>)    
}

export default Historial;