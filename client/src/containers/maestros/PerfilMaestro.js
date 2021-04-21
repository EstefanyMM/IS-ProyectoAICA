import React, {useState} from 'react'
import '../../components/Navbar.css'
//import PerfilEstudiante from '../../components/perfilEstudiante';
import NavbarMaestro from './NavbarMaestro';

const PerfilMaestro=()=>{
  const sizeRule = {minHeight: '41rem'}
    return(<>
        <NavbarMaestro>
        </NavbarMaestro><br></br>
        <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Pagina Principal</button>
        </div>
        <div class="btn-group btn-right" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">Atras</button>
            <button type="button" class="btn btn-outline-primary">Cerrar Sesión</button>
        </div><br></br><br></br>
        <div class="col-lg-8 mx-auto p-3 py-md-5">
        <main>
        <div className="container-fluid">
          <h1 className="mt-4">Perfil</h1>
          <div className="row">
                <div className="col-lg-6">
                  <div className="card col-md-12 my-4" style={sizeRule}>
                    <div className="card-body">
                      <h4 className="font-weight-extrabold my-4 card-title">Información del maestro</h4>
                      <p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Cinthia Sierra</li>
                          <li className="list-group-item">Cinthia@gmail.com</li>
                          <li className="list-group-item">98457432</li>
                          <li className="list-group-item">Colonia el Carrizal</li>
                          <li className="list-group-item">Idiomas:</li>
                          <li className="list-group-item">Ingles</li>
                          <li className="list-group-item">Aleman</li>
                        </ul>
                      </p>
                      <button type="button" class="btn btn-primary btn-lg">Editar</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card col-md-12 my-4" style={sizeRule}>
                    <div className="card-body">
                      <h4 className="font-weight-extrabold my-4 card-title">Foto de Perfil</h4>
                      
        <div class="col contenedor">
          <div class="card shadow-sm">
             <img src="../img/portfolio/alemania.png"></img>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-primary">Cambiar Foto</button>
                </div>
                <small class="text-muted"></small>
              </div>
            </div>
          
        </div>
        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </main>
        </div>
            
</>)}

export default PerfilMaestro;