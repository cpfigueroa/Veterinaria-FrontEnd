// LandingPage.jsx
import React from "react";
// import "./LandingPage.css"
import Bienvenida from "../Bienvenida/Bienvenida";
import Servicios from "../Servicios/Servicios";
import Slider from "../Deslizante/Slider"; 
import Publicidad  from "../Publicidad/Publicidad";
import Clima from '../Clima/Clima';  // Ajusta la ruta según sea necesario
import {Planes} from "../Planes/Planes";
import {Veterinario} from "../Veterinario/Veterinario";
import {Testimonios} from "../Testimonios/Testimonios";

const LandingPage = () => {
    return (
        <div className="contenedor-padre">
            <Bienvenida/> 
            <Servicios/>
            <Slider />
            <br />
            <br />
            <br />
            <Publicidad/>
            <br />
            <br />
            <br />
            <br />
            <Planes />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Testimonios />
            <br />
            <br />
            <br />
            <br />
            <Veterinario />
            <br />
            <br />
            <Clima />
            
            
        </div>
    );
};

export default LandingPage;



