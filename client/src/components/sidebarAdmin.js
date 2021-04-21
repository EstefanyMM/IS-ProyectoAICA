import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarAdmin = [
    {
        title: 'Perfil',
        path: '/Admin-Perfil',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Estudiantes',
        path: '/lista-estudiantes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Mestros',
        path: '/Lista-maestros',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Cursos',
        path: '/Admin-Cursos',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    /*{
        title: 'Messages',
        path: '/messager',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },*/
    {
        title: 'Salir',
        path: '/',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
   
]
export default SidebarAdmin;