import React from 'react';
import { Card } from 'react-bootstrap';

const CardTurnos = ({ turno }) => {
	const formattedDate = new Date(turno.startDate.slice(0, -1)).toLocaleString();
	// Definimos el componente funcional CardTurnos que toma turno como prop. Luego, extraemos y formateamos la fecha de turno.startDate. La parte de "turno.startDate.slice(0, -1)", elimina el último carácter de la cadena de fecha, y "new Date(...).toLocaleString():",convierte la cadena de fecha en un objeto Date y luego lo formatea en una cadena legible.
	return (
		<Card className="my-4">
			<Card.Body>
				<div className="d-flex align-items-center justify-content-center mb-2">
					<Card.Title className="m-0 fw-bold">{turno.mascota}</Card.Title>
				</div>
				<Card.Text>
					<span className="fw-bold">Veterinario:</span> {turno.veterinario}
				</Card.Text>
				<Card.Text>
					<span className="fw-bold">Detalle Cita:</span> {turno.detalleCita}
				</Card.Text>
				<div className="d-flex align-items-center justify-content-center">
					<span className="badge bg-celeste-crud fs-6">{formattedDate}</span>
				</div>
			</Card.Body>
		</Card>
	);
};

export default CardTurnos;
