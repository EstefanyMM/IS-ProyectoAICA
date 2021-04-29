import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../components/Navbar.css'
import NavbarAdmin from './navbarAdmin';
import { FaCompressArrowsAlt } from 'react-icons/fa';

const ListaMaestros = () => {
  const [maestros, setMaestros] = useState([])

  useEffect(() => {
    obtenerMaestros();
  }, [])

  const obtenerMaestros = async () => {
    const res = await axios.get('http://localhost:4000/maestro');
    const data = await res.data;
    setMaestros(data);
  }

  const eliminarMaestros = async (id) => {
    const res = await axios.delete('http://localhost:4000/maestro/' + id);
    const data = await res.data;

    if (data) {
      obtenerMaestros();
    }
  }
  const paginaPrincipal = () => {
    window.location.href = '/admin';
  }
  const Crearmaestro = () => {
    window.location.href = '/crear-maestro';
  }

  return (<>
    <NavbarAdmin>
    </NavbarAdmin><br></br>
    <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
      <button onClick={paginaPrincipal} type="button" class="btn btn-outline-primary">Pagina Principal</button>
    </div>
    <br></br><br></br>
    <div>
      <h4>Listado Maestros</h4>
    </div><br></br>
    <div class="divtabla">
      <table class="table .table-bordered tablahistorial">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre </th>
            <th scope="col">Telefono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Correo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            maestros.map(item => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.Persona.nombreCompleto}</td>
                  <td>{item.Persona.numeroTelefono}</td>
                  <td>{item.Persona.direccion}</td>
                  <td>{item.Persona.Correos[0].email || ''}</td>
                  <td>
                    <button type="button" class="btn btn-link">Editar</button>
                    <button onclick={() => eliminarMaestros(item.id)} type="button" class="btn btn-link">Eliminar</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div><br></br>
    <div>
      <button onClick={Crearmaestro} type="button" class="btn btn-primary">Agregar</button>
    </div>
  </>)
}

export default ListaMaestros;