import React from 'react';
import { Container, Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminPacientes = ({ pacientes }) => {
	if (!pacientes || pacientes.length === 0) {
		return <Alert variant="info">No hay pacientes registrados.</Alert>;
	}

	return (
		<Container>
			<h1 className="mt-4">Administrar Pacientes</h1>
			<Link to="/admin/clientes/create">
				<Button variant="primary" className="mb-3">
					Agregar Paciente
				</Button>
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Email</th>
						<th>Teléfono</th>
						<th>Mascota</th>
						<th>Especie</th>
						<th>Raza</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{pacientes.map((paciente) => (
						<tr key={paciente.id}>
							<td>{paciente.nombre}</td>
							<td>{paciente.apellido}</td>
							<td>{paciente.email}</td>
							<td>{paciente.telefono}</td>
							<td>{paciente.mascota}</td>
							<td>{paciente.especie}</td>
							<td>{paciente.raza}</td>
							<td>
								<Link to={`/admin/clientes/edit/${paciente.id}`}>
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

export default AdminPacientes;
