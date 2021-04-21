import React, {useState} from 'react'
import '../../components/Navbar.css'
import NavbarStudent from './navbarStudent';

const EstudianteCursos=()=>{
  return(<>
    <NavbarStudent>
    </NavbarStudent><br></br>
    <div class="btn-group btn-left" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">Pagina Principal</button>
        </div>
        <div class="btn-group btn-right" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">Atras</button>
            <button type="button" class="btn btn-outline-primary">Cerrar Sesión</button>
        </div><br></br><br></br>
    <main>
  <section class="py-3 text-center container">
    <div class="row py-lg-3">
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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
                  <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
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

  </>)
}
export default EstudianteCursos;