import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle,
MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import '../css/cursoMaestro.css';

const CalificacionesMaestro = () => {

    

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
                            <th scope="col">Id</th>
                            <th scope="col">Nombre Tarea</th>
                            <th scope="col">Nota</th>
                            <th scope="col">Observacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class="table-success">
                            <th scope="row">1</th>
                            <th scope="row">EJERCICIO D</th>
                            <td colspan="1">10</td>
                            <td>Mejorar las vistas</td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>

        </div>
        </>
    )
}

export default CalificacionesMaestro;