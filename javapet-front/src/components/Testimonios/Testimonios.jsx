import React from 'react';
import '../Testimonios/Testimonios.css';
import testimonio1 from "../../assets/testimonio1.jpg";
import testimonio2 from "../../assets/testimonio2.jpg";
import testimonio3 from "../../assets/testimonio3.jpg";

export const Testimonios = () => {
  return (
    <div className="testimonios-container d-flex justify-content-center align-items-center">
      <div className="row">

        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center img-container">
          <img src={testimonio1} alt="Maria" className="img-circle" />
          <h2>Maria</h2>
          <p>"...Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."</p>
        </div>

        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center img-container">
          <img src={testimonio2} alt="Lucas" className="img-circle" />
          <h2>Lucas</h2>
          <p>"...Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."</p>
        </div>

        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center img-container">
          <img src={testimonio3} alt="Magdalena" className="img-circle" />
          <h2>Magdalena</h2>
          <p>"...Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."</p>
        </div>

      </div>        
    </div>
  );
};
