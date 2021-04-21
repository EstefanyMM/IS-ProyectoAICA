import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from '../../components/SidebarData'
import '../../components/Navbar.css';
import { IconContext} from 'react-icons'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, 
MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";

const Navbar = () =>  {

  /*const [user, setUser] = useState({
    contrasenia: '',
    correo: '',
    direccion: '',
    edad: '',
    fechaRegistro: '',
    id: '',
    nombreCompleto: '',
    numeroIdentidad: '',
    telefono1: '',
    telefono2: '',
  });

  const { nombreCompleto } = user;

  useEffect(() => {
    getUser();
  }, []);

  const logout = () =>{
    localStorage.clear();
    window.location.href = '/login';
  }


  const getUser = () => {
    let data = JSON.parse(localStorage.getItem('user'));

    setUser(data.result[0]);
    console.log(data)
  }

  const[sidebar, setSidebar]= useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  if (JSON.parse(localStorage.getItem('user'))) {
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           
           <div className="navbar">
               <Link to="#" className='menu-bars'>
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               <Link >
               </Link>
               <div className="margen"></div>
               <MDBDropdown>
                <MDBDropdownToggle caret color="ins" className="color">
                  {nombreCompleto}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Editar Perfil</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem><li onClick={logout}>Cerrar Sesion</li></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>   
               
           </div>
           <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <h3>Bienvenido {nombreCompleto}</h3>
            <MDBCardImage
              className="img-fluid"
              src="./img/academia.png"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">INICIO ESTUDIANTE</MDBCardTitle>
              <MDBCardText ClassName="ho">
                Queridos Estudiantes Es un place que sean parte de Nuestra Familia, Aqui encontraran todo lo necesario 
                para resivir tus clases 
              </MDBCardText>
              <MDBBtn href="#" color="pink" className="cin"  >
                Matricula
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           <div >
           
           </div>

           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className="navbar-toggle">
                       <Link to="#" className='menu-bars'>
                           <AiIcons.AiOutlineClose />
                       </Link>
                   </li>
                   {SidebarData.map((item, index) => {
                       return(
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
  }else{
    window.location.href = '/login'
  }*/
  const[sidebar, setSidebar]= useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
       
       <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <Link className="navbar-brand" to="./Navbar">Inicio</Link>
        <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" to="#">
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i>buscar</button>
                    </div>
                </div>
            </form>
       </div>
       <MDBContainer className="mt-5 text-center">
  <MDBRow>
    <MDBCol>
      <MDBJumbotron className="p-0">
        <h3>Bienvenido</h3>
        <MDBCardImage
          className="img-fluid"
          src="./img/academia.png"
        />
        <MDBCardBody>
          <MDBCardTitle className="h3">INICIO ESTUDIANTE</MDBCardTitle>
          <MDBCardText ClassName="ho">
            Queridos Estudiantes Es un place que sean parte de Nuestra Familia, Aqui encontraran todo lo necesario 
            para resivir tus clases 
          </MDBCardText>
          <MDBBtn href="#" color="pink" className="cin">Matricula</MDBBtn>
        </MDBCardBody>
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
</MDBContainer>
       <div >
       
       </div>

       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
           <ul className='nav-menu-items' onClick={showSidebar}>
               <li className="navbar-toggle">
                   <Link to="#" className='menu-bars'>
                       <AiIcons.AiOutlineClose />
                   </Link>
               </li>
               {SidebarData.map((item, index) => {
                   return(
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

export default Navbar;

/*<MDBDropdownItem><li onClick={logout}>Cerrar Sesion</li></MDBDropdownItem>

<div className="margen"></div>
           <MDBDropdown>
            <MDBDropdownToggle caret color="ins" className="color">
              Hola
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Editar Perfil</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem><li>Cerrar Sesion</li></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown> 

*/