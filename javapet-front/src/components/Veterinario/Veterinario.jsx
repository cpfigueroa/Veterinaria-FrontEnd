import React from "react";
import "../Veterinario/Veterinario.css";

export const Veterinario = () => {
    return (
        <div className="veterinario-wrapper">
            <h1 id="veterinario-title">
                Nos acompañan Profesionales de primer nivel
            </h1>
            <div className="veterinario-container">
            <div className="cardv" id="card1v" style={{ width: "400px", height:"400px" }}></div>
                <div className="cardv" id="card2v" style={{ width: "400px", height:"400px"}}></div>
                <div className="cardv" id="card3v" style={{ width: "400px", height:"400px"}}></div>
                <div className="cardv" id="card4v" style={{ width: "400px",height:"400px" }}></div>
            </div>
        </div>
    );
};
