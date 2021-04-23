import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from '../../components/SidebarData'
import '../../components/Navbar.css'
import { IconContext } from 'react-icons'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

function Navbar1() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className="navbar">
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link >

          </Link>

        </div>
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron className="p-0">
                <MDBCardImage
                  className="img-fluid"
                  src=""
                />
                <MDBCardBody>
                  <MDBCardTitle className="h3">Agregar Docente </MDBCardTitle>
                  <MDBCardText ClassName="holakaka">
                    <div className=" col-8" > </div>
                    <div className="row"></div>

                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre Completo  " />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Identidad " />
                      </div>
                    </div>
                    <div className=" col-8" > </div>
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="NumeroTelefono" />
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Edad" />
                        </div>
                      </div>
                      <div className=" col-8" > </div>
                    </form>
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Direccion " />
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Password" />
                        </div>
                      </div>
                    </form>
                    <div className=" col-8" > </div>
                    <form>
                      <div class="row">
                        <div class="col">
                          <input type="text" class="form-control" placeholder="Decripcion " />
                        </div>
                        <div class="col">
                          <input type="text" class="form-control" placeholder="nombreUsuario" />
                        </div>
                      </div>
                    </form>

                    <MDBBtn href="#" color="pink" className="cin"  >
                      Agregar
              </MDBBtn>

                    <h3> Lista </h3>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"> Numero de la lista  </th>
                          <th scope="col"> Nombre Completo</th>
                          <th scope="col"> Identidad</th>
                          <th scope="col">Numero Telefono</th>
                          <th scope="col">Edad</th>
                          <th scope="col"> Dirrecion</th>
                          <th scope="col"> Password</th>
                          <th scope="col">Descricion </th>
                          <th scope="col">nombreusuario</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"> </th>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>

                          <button type="button" color="green" class="btn btn-green ">Eliminar</button>
                        </tr>

                      </tbody>
                    </table>
                    <div>



                    </div>

                  </MDBCardText>



                  <MDBBtn href="navbar" color="pink" className="cin"  >
                    salir
              </MDBBtn>

                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div >
          Escuela De Idiomas  CentroAmericana
           </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li Key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>


    </>




  );

}

export default Navbar1
