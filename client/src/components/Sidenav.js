import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link to="/admin/usuarios" className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Usuarios
                        </Link>
                        <Link to="/admin/maestros" className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Maestros
                        </Link>
                        <Link to="/admin/maestros" className="nav-link" >
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Eventos
                        </Link>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logueado en:</div>
                    AICA Administrativo
                </div>
            </nav>
        </div>
    )
}

export default Sidenav;