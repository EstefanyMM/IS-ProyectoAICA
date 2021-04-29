import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData2 = [
    {
        title: 'Inicio',
        path: '/perfil-maestro',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
   
   
    {
        title: 'Perfil',
        path: '/mostrar-perfilm',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Cursos',
        path: '/curso-maestro',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Archivos',
        path: '/asignaciones/:id',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Crear seccion',
        path: '/crear-seciones',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]