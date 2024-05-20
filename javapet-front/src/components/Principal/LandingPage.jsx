// LandingPage.jsx
import React from "react";
import "./LandingPage.css"
import {B} from "../Bienvenida/B";
import Servicios from "../Servicios/Servicios";
 import Slider from "../Deslizante/Slider"; 
import Publicidad  from "../Publicidad/Publicidad";
// import {Nosotros} from "./Nosotros";
// import {Adoption} from "./Adoption";
import {Planes} from "../Planes/Planes";
// import {Veterinario} from "./Veterinario";
import {Testimonios} from "../Testimonios/Testimonios";

const LandingPage = () => {
    return (
        <div className="contendor-padre">
            <B/>
            <Servicios/>
            <Slider />
            <Publicidad/>
            <Planes />
            <Testimonios />
            {/* <Nosotros/> */}
            {/* <Adoption/> */}
            {/* <Veterinario /> */}
        </div>
    );
};

export default LandingPage;
