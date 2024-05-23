import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminTurnos = ({ turnos }) => {
	if (!turnos || turnos.length === 0) {
		return <Alert variant="info">No hay turnos registrados.</Alert>;
	}

	return (
		<Container>
			<h1 className="mt-4">Administrar Turnos</h1>
			<Link to="/admin/turnos/create">
				<Button variant="primary" className="mb-3">
					Agregar Turno
				</Button>
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Detalle de Cita</th>
						<th>Veterinario</th>
						<th>Mascota</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{turnos.map((turno) => (
						<tr key={turno.id}>
							<td>{turno.detalleCita}</td>
							<td>{turno.veterinario}</td>
							<td>{turno.mascota}</td>
							<td>{turno.fecha}</td>
							<td>{turno.hora}</td>
							<td>
								<Link to={`/admin/turnos/edit/${turno.id}`}>
									<Button variant="warning" className="me-2">
										Editar
									</Button>
								</Link>
								<Button variant="danger">Eliminar</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default AdminTurnos;
