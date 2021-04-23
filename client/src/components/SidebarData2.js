import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData2 = [
    {
        title: 'Perfil',
        path: '/perfil-maestro',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
   
   
    {
        title: 'Registro Estudiantes',
        path: '/lista-estudiante',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Archivos',
        path: '/asignaciones',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Cursos',
        path: '/curso-maestro',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Crear seccion',
        path: '/crear-seciones',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Salir',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
   
]