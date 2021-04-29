import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../components/Navbar.css'
import NavbarAdmin from './navbarAdmin';

const ListaEventos = () => {

  const [evento, setEvento] = useState([])

  useEffect(() => {
    obtenerEvento();
  }, [])

  const obtenerEvento = async () => {
    const res = await axios.get('http://localhost:4000/evento');
    const data = await res.data;
    setEvento(data);
  }

  const eliminarEvento = async (id) => {
    const res = await axios.delete('http://localhost:4000/evento/' + id);
    const data = await res.data;

    if (data) {
      obtenerEvento();
    }
  }
  const crearevento = () => {
    window.location.href = '/crear-evento';
  }
  const paginaPrincipal = () => {
    window.location.href = '/admin';
  }

  return (
  <>
    <NavbarAdmin>
    </NavbarAdmin><br></br>
    <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
      <button onClick={paginaPrincipal} type="button" class="btn btn-outline-primary">Pagina Principal</button>
    </div>
    <br></br><br></br>
    <div>
      <h4>Listado de Eventos</h4>
    </div><br></br>
    <div class="divtabla">
      <table class="table .table-bordered tablahistorial">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Fecha</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            evento.map(item => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.nombre}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.fechaEvento}</td>
                  <td>
                    <button onClick={() => eliminarEvento(item.id)} type="button" class="btn btn-link">Eliminar</button>
                  </td>
                </tr>
              )
            })}

        </tbody>
      </table>
    </div>
    <br></br>
    <div>
      <button  onClick={crearevento} type="button" class="btn btn-primary">Agregar</button>
    </div>
  </>)
}

export default ListaEventos;