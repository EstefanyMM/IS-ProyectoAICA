import React, {useState} from 'react'
import '../../components/Navbar.css'
import { IconContext} from 'react-icons'
import NavbarAdmin from './navbarAdmin';
import {Modal} from '@material-ui/core';
import {ModalBody, ModalHeader } from 'reactstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const AdminCursos=()=>{
  const [enable, setEnable] = useState(false);
  const [modalInsertar, setModalInsertar]=useState(false);
  const fincaInit ={
    id:'',
  }
  const [fincaSeleccionada, setFincaSeleccionada]=useState(fincaInit);
  const handleChange=(e)=>{
    let {name, value}=e.target;
      setFincaSeleccionada((prevState)=>{
        if(prevState[name]!==value){
          setEnable(true);
        }
      return{...prevState,
      [name]: value
      }
    })
  }

  const abrirCerrarModalInsertar=()=>{
    setEnable(false)
    
    setModalInsertar(!modalInsertar);
  }

  const bodyInsertar=(
    <div style={{ overflowY:'auto',overflowX:'hidden',position:'absolute', width:'470px', height:'600px', backgroundColor:'white', top:'50%',  left:'50%', transform: 'translate(-50%, -50%)', borderRadius:10}}>
      <ModalBody className="ml-3" style={{ overflowY:'auto',position:'absolute', backgroundColor:'white', width:'430px'}}>
      
    <div className="form-group mt-4">
      <label  htmlFor="tipo_finca">Tipo Finca</label>
      <select className="form-control"  name="tipo_finca" id="tipo_finca" onChange={handleChange} >
        <option  value='' >--seleccione--</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="tecnico">Técnico</label>
      <select className="form-control "  name="tecnico" id="tecnico" onChange={handleChange} >
        <option  value='' >--seleccione--</option>
      
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="nombre">Nombre Finca</label>
      <input className="form-control" type="text" name="nombre" id="nombre" onChange={handleChange} />
    </div>
    <div className="form-group">
      <label className="small mb-1"  htmlFor="inputCountry">Latitud</label>
      <input className="form-control " type="number" name="latitud" id="latitud" onChange={handleChange} />          
    </div>
    <footer style={{paddingTop:'10px', marginLeft:'auto'}}>
      <button onChange={handleChange} disabled={!enable} className="btn btn-outline-primary btn-aceptar btn-block btn-sm" >Agregar</button>
      <button className="btn btn-outline-primary btn-cancelar btn-block btn-sm" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
    </footer> 
    </ModalBody>
  </div>
      )
  return(<>
    <NavbarAdmin>
    </NavbarAdmin>
    <br></br>
    <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Pagina Principal</button>
        </div>
        <div class="btn-group btn-right" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" onClick={()=>abrirCerrarModalInsertar()}>Agregar Curso</button>
            <button type="button" class="btn btn-outline-primary">Cerrar Sesión</button>
        </div><br></br><br></br>
    <main>
  <section class="py-3 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Cursos</h1>
      </div>
    </div>
  </section>

  <div class="album bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col contenedor">
          <div class="card shadow-sm">
             <img src="../img/portfolio/alemania.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Aleman</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/China_xian.jpg"></img>
            <div class="card-body">
              <p class="card-text">Idioma Mandarin </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/francia1.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Frances</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>

        <div class="col contenedor">
          <div class="card shadow-sm">
            <img src="../img/portfolio/USA.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Ingles</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/japon2.jpg"></img>
            <div class="card-body">
              <p class="card-text">Idioma Japones</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
        <div class="col contenedor">
          <div class="card shadow-sm">
          <img src="../img/portfolio/italia1.png"></img>
            <div class="card-body">
              <p class="card-text">Idioma Italiano</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Eliminar</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
<Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>{bodyInsertar}</Modal>
  </>)
}
export default AdminCursos;