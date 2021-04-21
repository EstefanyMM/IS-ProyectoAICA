import React, { useState, } from 'react'
import axios from "axios";

const CodigoSeguridadMaestro = () => {
    const [mostrar, setmostrar] = useState(false);
    const [user, setUser] = useState({ correo: " ", codigo: " " });
    const [idusuario, setidusuario] = useState(0);
    const [contrasena, setcontrasena] = useState(" ");


    const { correo, codigo } = user;

    const handleInputChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleInputChangeContrasenia = (e) => {

        setcontrasena(e.target.value);
    }

    const handleSutmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const res = await axios.post('http://localhost:4000/maestro/restablecer-contrasena', user);
        const data = await res.data;
        console.log(data)

        if (data.ok) {
            setidusuario(data.id);
            setmostrar(true);
        }
        else {
            alert('correo codigo incorrecto')
        }
    }

    const handleSutmitcontrasena = async (e) => {
        e.preventDefault();
        console.log(contrasena);

        const res = await axios.put('http://localhost:4000/maestro/' + idusuario + '/actualizar-contrasena', { contrasena });
        const data = await res.data;
        console.log(data);


        if (data.ok) {
            window.location.href = '/login-maestro'

        }
    }


    return (


        <div class="container">
            <div class="row   justify-content-center">
                <div class="  col-md-8 py-md-5 offset-md-2">

                    <div class="card text-center ">
                        <div class="card-header">
                            Reestablecer su Contraseña
  </div>
                        <div class="card-body">

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Ingrese su Correo </label>
                                <input type="email" name="correo" onChange={handleInputChange} value={correo} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" name="correo" class="form-text"> </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Ingrese su codigo de seguridad </label>
                                <input type="text" onChange={handleInputChange} value={codigo}
                                    name="codigo" class="form-control" id="exampleInputPassword1" />
                            </div>


                            <h5 class="card-title"> </h5>

                            <button onClick={handleSutmit} class="btn btn-primary">Enviar</button>
                        </div>
                        <div class="card-footer text-muted">
                        </div>
                    </div>
                </div>

            </div>

            {
                mostrar &&
                <div class="row   justify-content-center">

                    <div class="  col-md-8 py-md-5 offset-md-2">

                        <div class="card text-center ">

                            <div class="card-body">

                                <div class="card-header">
                                    Reestablecer su Contraseña
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Ingrese su nueva Contraseña</label>
                                    <input name="contrasena" onChange={handleInputChangeContrasenia} value={contrasena} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"> </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Verfique su Contraseña </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>

                                <h5 class="card-title"> </h5>

                                <button onClick={handleSutmitcontrasena} class="btn btn-primary">Guardar</button>
                            </div>
                            <div class="card-footer text-muted">

                            </div>
                        </div>



                    </div>

                </div>

            }

        </div>



    )

}
export default CodigoSeguridadMaestro;