import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import '../nodejs/node_modules/mysql';

/*import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";*/
import SignUp from "./components/pruebaRegistro";
import LandingPage from "./components/landingpage.component";

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/team';
import Contact from './components/contact';
import Maestro from './components/LoginMaestro';
import PerfilMaestro from './components/PerfilMaestro';
import Empleado from './components/empleado';
import Eventos from './components/eventos';
import Cursos from './components/cursos';
import LoginPrueba from './components/LoginEstudiante';
import PerfilEstudiante from './components/PerfilEstudiante';
import  Dashboard  from './components/Dashboard';
import  Prueba  from './components/prueba';
import CursosMaestro from './components/CursosMaestro'
import {ListaEstudiante} from './components/ListaEstudiante';
import CursosEstudiantes from './components/CursosEstudiantes';
import AsignacionesMaestro from './components/AsignacionesMaestro';
import Matricular from './components/matricular';
import MostarPerfilEstudiante from './components/MostarPerfilEstudiante';
import EditarPerfilEstudiante from './components/EditarPerfilEstudiante';
import MostrarPerfilMaestro from './components/MostrarPerfilMaestro';
import EditarPerfilMaestro from './components/EditarPerfilMaestro';
import CodigoSeguridadMaestro from './components/CodigoSeguridadMaestro';
import codigoseguridadEstudiante from './components/codigoseguridadEstudiante';
import Crearsecciones from './containers/administrador/crear_secciones'
import Administrador from './components/administrador';
import listaEstudiante from '../src/containers/administrador/listaEstudiantes';
import AsignacionesEstudiante from './components/AsignacionesEstudiante';
import Crearidioma from './containers/administrador/crear_idioma';
import ListaIdiomas from './containers/administrador/listaIdiomas';
import ListaMaestro from './containers/administrador/listaMaestros';
import ListaEvento from './containers/administrador/listaEventos';
import Crearmaestro from './containers/administrador/crear_maestro';
import asignarMaestroIdioma from './containers/administrador/asignarMaestroIdioma';
import CalificacionesMaestro from './containers/maestros/calificacionesMaestro';
import Crearevento from './containers/administrador/crear_evento'



function App() {
  return (<Router>
    <div className="App" >
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/prueba' component={Prueba} />
            <Route exact path='/crear-seciones' component={Crearsecciones} />
            <Route exact path='/crear-idioma' component={Crearidioma} />
            <Route exact path='/crear-maestro' component={Crearmaestro} />
            <Route exact path='/crear-evento' component={Crearevento} />
            <Route exact path="/login" component={LoginPrueba} />
            <Route exact path="/sign-up" component={Prueba} />
            <Route path ="/Navigation" component ={Navigation} />
            <Route path="/Team" component ={Team} />
            <Route path="/about" component ={About} />
            <Route path="/header" component ={Header} />
            <Route path="/Features" component ={Features} />
            <Route path="/Services" component ={Services} />
            <Route path="/Gallery" component ={Gallery} />
            <Route path="/Testimonials" component ={Testimonials} />
            <Route path="/Contact" component ={Contact} />
            <Route exact path="/login-maestro" component ={Maestro}/>
            <Route exact path="/perfil-maestro" component ={PerfilMaestro} />
            <Route path="/Empleado" component ={Empleado}/>
            <Route path="/Eventos" component={Eventos}/>
            <Route exact path="/cursos" component={Cursos}/>
            <Route exact path="/perfil-estudiante" component={PerfilEstudiante}/>
            <Route path='/admin' component={Dashboard} />
            <Route path='/curso-maestro' component={CursosMaestro} />
            <Route exact path='/listado/:id' component={ListaEstudiante}/>
            <Route exact path='/curso-estudiante' component={CursosEstudiantes}/>
            <Route exact path='/asignaciones/:id' component={AsignacionesMaestro}/>
            <Route exact path='/matricular/:id' component={Matricular}/>
            <Route exact path='/mostrar-perfil' component={MostarPerfilEstudiante}/>
            <Route exact path='/editarEstudiante/:Id' component={EditarPerfilEstudiante}/>
            <Route exact path='/mostrar-perfilm' component={MostrarPerfilMaestro}/>   
            <Route exact path='/editarMaestro/:Id' component={EditarPerfilMaestro}/>         
            <Route exact path='/codigo-seguridad' component={codigoseguridadEstudiante}/>
            <Route exact path='/codigo-seguridad-maestro' component={CodigoSeguridadMaestro}/>
            <Route exact path='/administrador' component={Administrador}/>
            <Route exact path='/lista-estudiante' component={listaEstudiante}/>
            <Route exact path='/lista-maestro' component={ListaMaestro}/>
            <Route exact path='/lista-evento' component={ListaEvento}/>
            <Route exact path='/asignacioness/:id' component={AsignacionesEstudiante}/>
            <Route exact path='/lista-idioma' component={ListaIdiomas}/>
            <Route exact path='/asignar-maestro/:id' component={asignarMaestroIdioma}/>
            <Route exact path='/calificaciones/:id' component={CalificacionesMaestro}/>

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
export default App;

