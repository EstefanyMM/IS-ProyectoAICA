import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from '../../components/SidebarData'
import '../../components/Navbar.css'
import { IconContext} from 'react-icons'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

function Navbar3() {
    const[sidebar, setSidebar]= useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
           
           <div className="navbar">
               <Link to="#" className='menu-bars'>
                   <FaIcons.FaBars onClick={showSidebar}/>
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
              src="./img/academia.png"
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">INICIO ADMINISTRADOR </MDBCardTitle>
              <MDBCardText ClassName="ho">
                Lider en la Eneñanza de Idiomas 
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
    
}

export default Navbar3
