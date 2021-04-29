
import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import './usuarios2.css';

const Crearsecciones = () => {

    const [state, setstate] = useState(false)
    const [seccion, setSeccion] = useState({

        horaInicio: '',
        horaFin: '',
        cuposMaximos: '',
        dias: '',


    });
    const { horaInicio, horaFin, cuposMaximos, dias } = seccion;

    const handleSubmit = async () => {

        const res = await axios.post('http://localhost:4000/seccion', seccion);
        const data = await res.data;

        console.log(data); swal({
            text: 'Seccion creada',
            icon: "success",
            button: "Aceptar",
        }).then(respuesta => {
            if (respuesta) {
                window.location.href = '/admin';
            }
        })
        if (data.id) {

        }

    }

    const handleInputChange = (e) => {
        setSeccion({
            ...seccion,
            [e.target.name]: e.target.value
        });
    }




    return (
        <div className="imgFondoAdmin">


            <div class="container">
                <div class="row   justify-content-center">



                    <div class="  col-md-8 py-md-5 offset-md-2">

                        <div class="card text-center ">

                            <div class="card-body">

                                <div class="card-header">
                                    <h3>Crear Nueva Seccion</h3>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Hora Inicio</label>
                                    <input onChange={handleInputChange} name="horaInicio" value={horaInicio} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"> </div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Hora Final</label>
                                    <input onChange={handleInputChange} name="horaFin" value={horaFin} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"> </div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Cupos Maximos</label>
                                    <input onChange={handleInputChange} name="cuposMaximos" value={cuposMaximos} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"> </div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Ingrese los dias</label>
                                    <input onChange={handleInputChange} name="dias" value={dias} type="numbre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"> </div>
                                </div>



                                <h5 class="card-title"> </h5>

                                <button class="btn btn-primary" onClick={handleSubmit}>Crear Seccion</button>
                            </div>
                            <div class="card-footer text-muted">

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div>


    )
}
export default Crearsecciones;

