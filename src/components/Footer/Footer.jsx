import React from "react";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
    
  return (
    <div className="container-fluid bg-celeste  mb-0 mt-5 py-3 text-white text-center">
      <div className="container">
        <img src={logo} alt="Logo JavaPet" width="80" height="50" />
      </div>
      <div className="container d-lg-flex  justify-content-lg-center my-4">
        <div>
          <Link to="*" className="mx-3 text-white text-decoration-none fs-6">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> 381560312
          </Link>
        </div>
        <div>
          <Link to="/Contactanos" className="mx-3 text-white text-decoration-none fs-6">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
            javapet@gmail.com
          </Link>
        </div>
        <div>
          <Link to="*" className="mx-3 text-white text-decoration-none fs-6">
            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> San Miguel
            de Tucumán
          </Link>
        </div>
      </div>
      <hr className="" />
      <p className="fs-5">
        JavaPet siempre cerca de ti. Siguenos para mas opciones.
      </p>
      <Link to="*" className="text-white">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="fs-2 mx-3"
        ></FontAwesomeIcon>
      </Link>
      <Link to="*" className="text-white">
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="fs-2 mx-3"
        ></FontAwesomeIcon>
      </Link>
      <Link to="*" className="text-white">
        <FontAwesomeIcon
          icon={faTwitterSquare}
          className="fs-2 mx-3"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Footer;