import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from '../../components/SidebarData';
import '../../components/Navbar.css';
import { IconContext} from 'react-icons';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, 
MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";

const NavbarStudent = () =>  {
    const[sidebar, setSidebar]= useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
       
       <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
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

export default NavbarStudent;