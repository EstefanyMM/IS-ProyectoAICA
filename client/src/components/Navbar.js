import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to="index.html">Administrador</Link>

            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" to="#">

            </button>

            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">

                    <div className="input-group-append">

                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="userDropdown" to="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">

                        <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;