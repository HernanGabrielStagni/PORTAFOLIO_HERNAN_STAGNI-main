import React from 'react'
import './STYLES/CSS_NavBar.css'
import DescargarPDF from './DescargarPDF';

const NavBar = () => {
    return (
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#proyects">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#contacto">abrir CV</a></li>
            <DescargarPDF/>
          </ul>
        </nav>
      );
}

export default NavBar