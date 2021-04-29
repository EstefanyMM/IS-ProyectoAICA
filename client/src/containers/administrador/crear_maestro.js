import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import './usuarios2.css';

const Crearmaestro = () => {
    const [state, setstate] = useState(false)
    const [maestro, setMaestro] = useState({
        nombreUsuario: '',
        descripcion: '',
        password: '',
        codigoSeguridad: '',
        nombreCompleto: '',
        numeroIdentidad: '',
        direccion: '',
        edad: '',
        numeroTelefono: '',
        email: ''


    });

    const { nombreUsuario, descripcion, password, codigoSeguridad, nombreCompleto, numeroIdentidad, direccion, edad, numeroTelefono, email } = maestro;


    const handleSubmit = async () => {

        const res = await axios.post('http://localhost:4000/maestro', maestro);
        const data = await res.data;

        console.log(data);
        swal({
            text: 'Maestro creado',
            icon: "success",
            button: "Aceptar",
        }).then(respuesta => {
            if (respuesta) {
                window.location.href = '/lista-maestro';
            }
        })
        if (data.id) {

        }

    }

    const handleInputChange = (e) => {
        setMaestro({
            ...maestro,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="imgFondoAdmin">
            <div>
                <div class="container">
                    <div class="row   justify-content-center">
                        <div class="  col-md-8 py-md-5 offset-md-2">

                            <div class="card text-center ">

                                <div class="card-body">

                                    <div class="card-header">
                                        <h3>Agregar nuevo maestro</h3>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nombre de Usuario</label>
                                        <input onChange={handleInputChange} name="nombreUsuario" value={nombreUsuario} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label"> Descripcion del Maestro</label>
                                        <input onChange={handleInputChange} name="descripcion" value={descripcion} type="text" class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Contraseña</label>
                                        <input onChange={handleInputChange} name="password" value={password} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Codigo de Seguridad</label>
                                        <input onChange={handleInputChange} name="codigoSeguridad" value={codigoSeguridad} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nombre completo del Maestro</label>
                                        <input onChange={handleInputChange} name="nombreCompleto" value={nombreCompleto} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Numero de Identidad</label>
                                        <input onChange={handleInputChange} name="numeroIdentidad" value={numeroIdentidad} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Direccion</label>
                                        <input onChange={handleInputChange} name="direccion" value={direccion} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Edad</label>
                                        <input onChange={handleInputChange} name="edad" value={edad} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Numero de Telefono</label>
                                        <input onChange={handleInputChange} name="numeroTelefono" value={numeroTelefono} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                                        <input onChange={handleInputChange} name="email" value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <h5 class="card-title"> </h5>
                                    <button onClick={handleSubmit} class="btn btn-primary">Crear Maestro</button>
                                </div>
                                <div class="card-footer text-muted">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Crearmaestro;