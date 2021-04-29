import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle,
    MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import '../css/cursoMaestro.css'

export const ListaEstudiante = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const [nota, setNota] = useState(0);
    const [estudiante, setEstudiante] = useState(0);


    useEffect(() => {
        getEstudiantes();
    }, [])

    const getEstudiantes = async () => {

        const res = await axios.get('http://localhost:4000/estudianteidioma/' + id);
        const data = await res.data;

        setData(data);
        console.log(data);
    }
    const handleSubmitNota = async () => {
        let peticion = {
            nota,
            EstudianteId: estudiante,
            IdiomaId: id
        }

        console.log(peticion)

        const res = await axios.post('http://localhost:4000/calificacion/', peticion);
        console.log(res)
        setEstudiante(0);
    }

    const handleInputNota = async (e) => {
        setNota(e.target.value)
    }
    const handleInputEstudiante = async (estudiante) => {
        setEstudiante(estudiante)
    }



    return (
        <>
            <div className="imgFondo3">
                <MDBNavbar color="blue-dark" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="red-text" className="text-card2">Listado de Estudiantes</strong>
                    </MDBNavbarBrand>
                    <MDBNavItem className="card-idioma3">
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret >
                                <div className="d-none d-md-inline"><MDBIcon icon="home" className="menu3" /></div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="/perfil-maestro">Volver a Perfil</MDBDropdownItem>
                                <MDBDropdownItem href="/curso-maestro">Volver a Cursos</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbar>
                <div className="Container">
                    <table className="table">
                        <thead class="bg-secondary letraH">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre Completo</th>
                                <th scope="col">Contacto</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Calificar</th>
                                <th scope="col">Nota</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(dato => {
                                    return (
                                        <tr class="table-secondary" key={dato.id}>
                                            <th scope="row">{dato.Estudiante.id}</th>
                                            <th scope="row">{dato.Estudiante.Persona.nombreCompleto}</th>
                                            <td colspan="1">{dato.Estudiante.Persona.numeroTelefono}</td>
                                            <td>{dato.Estudiante.Persona.Correos[0].email}</td>
                                            <td colspan="1"><button onClick={() => handleInputEstudiante(dato.EstudianteId)}>Agregar Nota</button></td>
                                            <td colspan="1"><input onChange={handleInputNota} type="number" className="form-control w-25" name="nota" disabled={estudiante == 0 ? true : false}></input></td>
                                            <td colspan="1"><button onClick={handleSubmitNota} type="button" className="btn btn-primary">Guardar</button></td>
                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table>
                    

                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//{dato.Estudiante.Persona.Correos[0].email}