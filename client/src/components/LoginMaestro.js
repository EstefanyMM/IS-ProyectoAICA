import React, { useState } from "react";
import axios from 'axios';
import "../css/LoginPrueba.css";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const Maestro = () => {

  const [maestro, setMaestro] = useState({
    nombreUsuario: '',
    password: ''
  });

  //const [loginStatus, setLoginStatus] = useState("");

  const { nombreUsuario, password } = maestro;

  const handleInputChange = (e) => {

    setMaestro({
      ...maestro,
      [e.target.name]: e.target.value
    });


  }

  const handleSutmit = async (e) => {
    if (validarFormulario(true)) {
      e.preventDefault();
      console.log(maestro);

      const res = await axios.post('http://localhost:4000/maestro/loginn', maestro);
      const data = await res.data;

      if (data.auth) {
        localStorage.setItem('maestro', JSON.stringify(data));
        swal({
          text: 'Bienvenido  ' + nombreUsuario,
          icon: "success",
          button: "Aceptar",
        }).then(respuesta => {
          if (respuesta) {
            window.location.href = '/perfil-maestro';
          }
        })
      }
    }
    else{
      swal("Error", "Usuario o contrasena incorrecta", "error");

    }

  }


  const validarFormulario = () => {
    if (nombreUsuario.trim().length == 0 ) {
      return false;
    }
    if (password.trim().length == 0) {
      return false;
    }
    else {
      return true
    }

  };

  return (
    <div className="flex1">
      <div className="imgSignUp1"></div>
      <form className="formSignUp">
        <div className="form-group titulo1">
          <h3 className="letraH">Inicio Maestro</h3>
          <div className="espacio9"></div>
        </div>

        <div className="posicionLogin">
          <label>Nombre Usuario</label>
          <input type="email" className="form-control"
            onChange={handleInputChange} value={nombreUsuario}
            name="nombreUsuario" placeholder="Ingrese usuario" />
        </div>
        <div className="espacio8"></div>
        <div className="posicionLogin">
          <label >Contraseña</label>
          <input type="password" name="password"
            onChange={handleInputChange} value={password}
            className="form-control" id="exampleInputPassword1"
            placeholder="Contraseña" />
        </div>
        <div className="espacio8"></div>
        <button type="button" className="btn-login1" onClick={handleSutmit}>Iniciar Sesion</button>
        <h6 className="text-danger"></h6>
        <div className="posicionLogin">
          <div className="final">
            <p>No puedes iniciar sesion? <a href="/">Regresar</a></p>
          </div>
          <Link to="/codigo-seguridad-maestro" className="forget">Olvidaste tu contraseña?</Link>
        </div>
        <div className="espacio7"></div>
      </form>
    </div>
  )

}

export default Maestro;