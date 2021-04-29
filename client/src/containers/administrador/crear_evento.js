import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import './usuarios2.css';

const Crearevento = () => {
    const [state, setstate] = useState(false)
    const [evento, setEvento] = useState({

        nombre: '',
        descripcion: '',
        fechaEvento: '',

    });

    const { nombre, descripcion, fechaEvento } = evento;


    const handleSubmit = async () => {

        const res = await axios.post('http://localhost:4000/evento', evento);
        const data = await res.data;

        console.log(data); swal({
            text: 'evento creado',
            icon: "success",
            button: "Aceptar",
        }).then(respuesta => {
            if (respuesta) {
                window.location.href = '/admin';
            }
        })
    }

    const handleInputChange = (e) => {
        setEvento({
            ...evento,
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
                                        <h3>Crear Nuevo Evento</h3>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Ingrese el nombre del Evento</label>
                                        <input onChange={handleInputChange} name="nombre" value={nombre} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label"> Enlace del evento</label>
                                        <input onChange={handleInputChange} name="descripcion" value={descripcion} type="text" class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Fecha del Evento</label>
                                        <input onChange={handleInputChange} name="fechaEvento" value={fechaEvento} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text"> </div>
                                    </div>
                                    <h5 class="card-title"> </h5>
                                    <button onClick={handleSubmit} class="btn btn-primary">Crear Evento</button>
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
export default Crearevento