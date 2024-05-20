import React from 'react';
import "../Nosotros/Nosotros.css"

export const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2 className="titulo-destacado">Lo mejor para tu mascota lo encontras aquí</h2>
      <div className="contenido">
        <p>
          Urgencias veterinarias 24 horas, consulta, análisis y pruebas diagnósticas.
        </p>
        <p>
        Profesionales especializados
        </p>
        {/* Agrega más párrafos aquí si es necesario */}
      </div>
    </div>
  );
};

