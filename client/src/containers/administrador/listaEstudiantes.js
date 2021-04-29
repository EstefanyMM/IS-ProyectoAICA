import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../components/Navbar.css'
import NavbarAdmin from './navbarAdmin';

const ListaEstudiantes = () => {

  const [estudiantes, setEstudiantes] = useState([])

  useEffect(() => {
    obtenerEstudiantes();
  }, [])

  const obtenerEstudiantes = async () => {
    const res = await axios.get('http://localhost:4000/estudiante');
    const data = await res.data;
    setEstudiantes(data);
  }

  const eliminarEstudiantes = async (id) => {
    const res = await axios.delete('http://localhost:4000/estudiante/' + id);
    const data = await res.data;

    if (data) {
      obtenerEstudiantes();
    }
  }
  const paginaPrincipal = () => {
    window.location.href = '/admin';
  }


  return (<>
    <NavbarAdmin>
    </NavbarAdmin><br></br>
    <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
      <button onClick={paginaPrincipal} type="button" class="btn btn-outline-primary">Pagina Principal</button>
    </div>
    <br></br><br></br>
    <div>
      <h4>Listado Estudiantes</h4>
    </div><br></br>
    <div class="divtabla">
      <table class="table .table-bordered tablahistorial">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre Alumno</th>
            <th scope="col">Telefono</th>
            <th scope="col">Usuario</th>
            <th scope="col">Dirección</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            estudiantes.map(item => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.Persona.nombreCompleto}</td>
                  <td>{item.Persona.numeroTelefono}</td>
                  <td>{item.nombreUsuario}</td>
                  <td>{item.Persona.direccion}</td>
                  <td>
                    <button onClick={() => eliminarEstudiantes(item.id)} type="button" class="btn btn-link">Eliminar</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
    <br></br>
    <div>
      <button type="button" class="btn btn-primary">Agregar</button>
    </div>
  </>)
}

export default ListaEstudiantes;