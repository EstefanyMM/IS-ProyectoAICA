import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/evento.css';

const Eventos = () => {


  const [evento, setEvento] = useState([])

  useEffect(() => {
    getEvento();
  }, []);

  const getEvento = async () => {

    const res = await axios.get('http://localhost:4000/evento/');
    const data = await res.data;

    setEvento(data);
    console.log(evento);

  }

  return (
    <div>
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="red-text">AICA</strong>
        </MDBNavbarBrand>
        <MDBNavbarBrand >
          <div className="aicaLogo">
          <strong className="red-text"><Link to={"/"}>INICIO</Link></strong>
          <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/academiaidiomasca" fab icon="facebook">
            <MDBIcon fab icon="facebook" />
          </MDBNavLink>
          </div>
        </MDBNavbarBrand>
      </MDBNavbar >
      <div>
        <from>
          <div>
            <h1>Eventos</h1>

          </div>
          <MDBRow>
            <MDBCol md='4'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <h5 className='pink-text'>
                      <MDBIcon icon='chart-pie' /> Conferencia
              </h5>
                    <MDBCardTitle tag='h3' className='pink-text'>
                      <strong> Abbiamo Fatto L'italia</strong>
                    </MDBCardTitle>
                    <p>
                      En esta  conferencia hablaremos  un poco de Italia, sus costombres, tradiciones, musica, religion,  y la importancia de aprender el idioma Italiano tambien una breve descripcion de la gramatica y las herramientas que se necesitan para aprenderlo
              </p>

                    <p>
                      Hora: 3-4 pm
                <p>

                      </p>

                      <p>
                        Dia: Lunes 8 de Marzo 2021
              </p>
                via Zoom: https://us04web.zoom.us/j/78203772709?pwd=WXEycjlQUTVHbmxGK3VyTVMvL2F5QT09
                 </p>

                    <MDBBtn color='pink'>
                      <MDBIcon icon=' left' /> Lic.Julio Medrano
              </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <h5 className='pink-text'>
                      <MDBIcon icon='chart-pie' /> Recorrido
              </h5>
                    <MDBCardTitle tag='h3' className='pink-text'>
                      <strong>Conoce nuestras instalaciones </strong>
                    </MDBCardTitle>
                    <p>
                      Te mostraremos nuestras instalaciones conoceras todos lo beneficios de formar parte de la gran familia que somos, tambien podras conocer la variedad de opciones que tendras al matricular un curso con nosotros
              </p>

                    <p>
                      Hora: 11 pm
                <p>

                      </p>

                      <p>
                        Dia: Viernes  de Marzo 2021
              </p>
                via Zoom: https://us04web.zoom.us/j/78203772709?pwd=WXEycjlQUTVHbmxGK3VyTVMvL2F5QT09
                 </p>

                    <MDBBtn color='pink'>
                      <MDBIcon icon=' left' /> Lic.Ana Maria Ramos
              </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard
                className='card-image'
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <h5 className='pink-text'>
                      <MDBIcon icon='chart-pie' /> Conferencia
              </h5>
                    <MDBCardTitle tag='h3' className='pink-text'>
                      <strong> Introduccion a la lengua Inglesa </strong>
                    </MDBCardTitle>
                    <p>
                      Podras conocer lo mas basico de la gramatica del idioma Ingles sus conjugaciones de los verbos, regulares e irregulares pasado, presente, futuro  tambien a usarlos en oraciones de manera correcta al formular oraciones y conversaciones.
              </p>


                    <p>
                      Hora: 5 pm
                <p>

                      </p>

                      <p>
                        Dia: Jueves 5 de Abril 2021
              </p>
                via Zoom: https://us04web.zoom.us/j/78203772709?pwd=WXEycjlQUTVHbmxGK3VyTVMvL2F5QT09
                 </p>
                    <p>

                    </p>

                    <MDBBtn color='pink'>
                      <MDBIcon icon='clone left' /> Lic.Carmen Juarez
              </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </from >
        <br />
        <br />
        <div className="row">
          {
            evento.map(dato => {
              return (
                <div key={dato.id} className="col-md-4 offset-md-1">
                  <div >
                    <div className="card" >
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg" className="card-img-top" alt="..." />
                      <div className="card-body" >
                        <h3 className="card-title">Evento: {dato.nombre}</h3>
                        <p className="card-text">Link: {dato.descripcion} </p>
                        <p className="card-text">Fecha: {dato.fechaEvento} </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div >

      </div>
    </div >
  );
}

export default Eventos;