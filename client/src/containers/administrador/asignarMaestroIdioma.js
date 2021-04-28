import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const AsignarMaestroIdioma = () => {


    const { id } = useParams();
    const [maestros, setMaestros] = useState([])

    useEffect(() => {
        obtenerMaestros();
    }, [])

    const obtenerMaestros = async () => {
        const res = await axios.get('http://localhost:4000/maestro');
        const data = await res.data;
        setMaestros(data);
    }


    const asignarMaestro = async (maestro) => {

        const res = await axios.post('http://localhost:4000/maestroidioma/', {
            MaestroId: Number(maestro),
            IdiomaId: Number(id)
        });
        const data = await res.data;
        console.log(res);
    }

    return (
        <div>
            <h1>Asignar Maestro</h1>
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

                                        <button onClick={() => asignarMaestro(item.id)} type="button" class="btn btn-link">Seleccionar</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
export default AsignarMaestroIdioma;