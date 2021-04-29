import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/cursoEstudiante.css'
import Swal from 'sweetalert2';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBDropdown, MDBDropdownToggle,
    MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";


const AsignacionesMaestro = () => {

    const { id } = useParams();

    const [archivos, setArchivos] = useState([]);
    const [descripcion, setDescripcion] = useState('');

    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
        console.log(descripcion)
    }

    useEffect(() => {
        getArchivos();
    }, [])

    const getArchivos = async () => {
        let resp = await axios.get('http://localhost:4000/idioma/archivo/' + id);
        let data = await resp.data;

        console.log(data);

        setArchivos(data);
    }

    const handleSubmitImage = async (e) => {
        const formData = new FormData();

        formData.append('tarea', e.target.files[0]);
        formData.append('descripcion', descripcion);
        try {
            const resp = await fetch(`http://localhost:4000/idioma/archivo/` + id, {
                method: 'POST',
                body: formData,
            });
            const body = await resp.json();

            console.log(body)
            getArchivos();
            Swal.fire({
                title: " ",
                text: "Archivo subido con exito",
                icon: "success",
                button: "Aceptar"
            });
        } catch (error) {
            console.log(error);
        }
    }
    const logout = () => {
        localStorage.clear();
        window.location.href = '/login-maestro';
    }

    const cursos = () => {
        window.location.href = '/curso-maestro';
    }
    return (
        <>
            <div className="imgArchivo">
                <MDBNavbar color="blue-dark" dark expand="md">
                    <MDBNavbarBrand className="item1">
                        <strong className="red-text" className="text-card">Archivos del Curso</strong>
                    </MDBNavbarBrand>
                    <MDBNavItem className="card-idioma2">
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <div className="d-none d-md-inline"><MDBIcon icon="home" className="menu2" /></div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="/perfil-maestro" className="center1">Inicio Perfil</MDBDropdownItem>
                                <MDBDropdownItem href="/curso-maestro" className="center1">Volver a Cursos</MDBDropdownItem>
                                <MDBDropdownItem onClick={logout}>Cerrar Sesion</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbar>

                <div className="container mt-5">
                    <h1>Mis Asignaciones</h1>

                    <div className="m-5 p-5" >
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            </div>
                            <div className="custom-file">
                                <input onChange={handleSubmitImage} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Seleccionar archivo</label>
                            </div>
                        </div>
                        <br></br>
                        <textarea name="descripcion" onChange={handleChangeDescripcion} className="form-control" cols="5" rows="3" className='text-area'></textarea>
                    </div>

                    <div></div>

                    <table className="table table-bordered">
                        <thead className="bg-info letraH">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre Archivo</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                archivos.map(item => {

                                    const { Archivo } = item;

                                    return (
                                        <tr key={Archivo.id} className="table-info" >
                                            <th scope="row">{Archivo.id} </th>
                                            <th scope="row">{Archivo.nombre} </th>
                                            <td scope="row">{Archivo.descripcion}</td>
                                            <td scope="row">{Archivo.url}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="espacio8"></div>
                    <div><button type="button" class="btn btn-secondary btn-lg" onClick={cursos}>Volver a Cursos</button></div>
                </div>
            </div>
        </>
    )
}
export default AsignacionesMaestro;
