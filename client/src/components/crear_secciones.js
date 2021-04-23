
import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const Crearsecciones = () => {
    const [state, setstate] = useState(false)
    const [idioma, setIdioma] = useState({

        nombre: '',
        descripcion: '',
        precio: '',
        totalEstudiante: ''

    });

    const { nombre, descripcion, precio, totalEstudiante } = idioma;

    const handleSubmit = async() =>{
      
          const res = await axios.post('http://localhost:4000/idioma', idioma);
          const data = await res.data;
      
          console.log(data);swal({
            text: 'Seccion creada',
            icon: "success",
            button: "Aceptar",
        }).then(respuesta => {
            if (respuesta) {
                window.location.href = '/perfil-maestro';
            }
        })
        if (data.id) {
            
        }
      
    }

    const handleInputChange = (e) => {
        setIdioma({
            ...idioma,
            [e.target.name]: e.target.value
        });
    }

    return (

        <div class="container">
            <div class="row   justify-content-center">


                <div class="  col-md-8 py-md-5 offset-md-2">

                    <div class="card text-center ">

                        <div class="card-body">

                            <div class="card-header">
                                <h3>Crear Nueva Seccion</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Ingrese el nombre del curso</label>
                                <input onChange={handleInputChange}  name="nombre" value={nombre} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"> </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"> Descripcion del Curso</label>
                                <input onChange={handleInputChange} name="descripcion" value={descripcion} type="text" class="form-control" id="exampleInputPassword1" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Total Estudiantes</label>
                                <input onChange={handleInputChange}  name="totalEstudiante" value={totalEstudiante} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"> </div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Precio</label>
                                <input onChange={handleInputChange}  name="precio" value={precio} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"> </div>
                            </div>

                            <h5 class="card-title"> </h5>

                            <button onClick={handleSubmit} class="btn btn-primary">Crear Seccion</button>
                        </div> 
                        <div class="card-footer text-muted">

                        </div>
                    </div>



                </div>

            </div>
        </div>


    )



}
export default Crearsecciones;