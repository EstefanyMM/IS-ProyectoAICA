import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle,
    MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
//import '.../css/cursoMaestro.css';

const CalificacionesMaestro = () => {

    const [estudiante, setEstudiante] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getCalificacion();
    }, [])

    const getCalificacion = async () => {
        let { Id } = JSON.parse(localStorage.getItem('user'));

        const res = await axios.get('http://localhost:4000/calificacion/' + Id);
        const body = await res.data;

        setData(body);
        console.log(body);

    } 

    return (
        <>

            <div className="imgFondo4">
                <MDBNavbar color="blue-dark" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="red-text" className="text-card2">Lista de Calificaciones</strong>
                    </MDBNavbarBrand>
                    <MDBNavItem className="card-idioma3">
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret >
                                <div className="d-none d-md-inline"><MDBIcon icon="home" className="menu3" /></div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="/perfil-maestro">Volver a Perfil</MDBDropdownItem>
                                <MDBDropdownItem href="/curso-maestro">Volver al listado</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbar>

                <div className="Container">
                    <table className="table">
                        <thead class="bg-success letraH">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Idioma</th>
                                <th scope="col">Nota</th>
                                <th scope="col">Observacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(dato => {
                                    return (
                                        <tr class="table-secondary" key={dato.id}>
                                            <th scope="row">{dato.id}</th>
                                            <th scope="row">{dato.Idioma.nombre}</th>
                                            <th scope="row">{dato.nota}</th>
                                            <th scope="row">{dato.Idioma.descripcion}</th>
                                        </tr>

                                    )
                                })
                            }


                        </tbody>



                    </table>

                </div>

            </div>
        </>
    )
}

export default CalificacionesMaestro;