import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import Aside from '../components/Aside';
import '../index.css'

export const MisRutas = () => {
  return (
    /* esta etiqueta nos sirve para crear un enlace que nos lleva a una ruta */
    <BrowserRouter >
        
        <Aside/>    

        {/* CONTENIDO CENTRAL */}
        <Routes className="main">
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>

    </BrowserRouter>


  )
}
