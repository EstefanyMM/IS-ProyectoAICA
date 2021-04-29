import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import '../css/styleDash.css'
import { Usuarios } from './Usuarios';
import { Maestros } from './Maestros';
import { EventosAdmin } from './EventosAdmin';
import Navbar from './Navbar';
import Sidenav from './Sidenav';


const Dashboard = () => {
    return (
        <div className="sb-nav-fixed" >
            <Navbar/>
            <div id="layoutSidenav">
                <Sidenav />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Panel Administrativo</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active"></li>
                            </ol>
                            <Switch>
                                <Route exact path='/admin/usuarios' component={Usuarios} />
                                <Route exact path='/admin/maestros' component={Maestros} />
                                <Route exact path='/admin/eventos' component={EventosAdmin} />
                                <Redirect to="/admin/usuarios"/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;