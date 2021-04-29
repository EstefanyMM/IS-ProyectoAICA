import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Inicio',
        path: '/perfil-estudiante',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Mis Cursos',
        path: '/curso-estudiante',
        icon: <IoIcons.IoIosBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Matricula',
        path: '/cursos',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/mostrar-perfil',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Calificaciones',
        path: '/calificaciones',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
]