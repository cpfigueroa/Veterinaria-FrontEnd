import React from 'react';
import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AdminTurnos = ({ turnos, URLTurnos, getApiTurnos }) => {
	const navigate = useNavigate();
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;
	useEffect(() => {
		if (!session) {
			navigate('/');
		}
	}, []);
	// Misma funcionalidad que AdminPacientes.jsx

	const sortTurnos = turnos;
	sortTurnos.sort((a, b) => {
		const as = a.startDate;
		const ad = new Date(as);
		const bs = b.startDate;
		const bd = new Date(bs);
		return ad - bd;
	});

	const arrayAlejo = sortTurnos.filter(
		(turno) => turno.veterinario === 'Sanchez Alejo'
	);
	const arrayCamila = sortTurnos.filter(
		(turno) => turno.veterinario === 'Rodriguez Camila'
	);
	//  Ordeno los turnos por fecha de inicio y luego filtra los turnos para los dos veterinarios, creando dos nuevos arrays que contienen solo los turnos asignados a cada uno de estos veterinarios.
	return (
		<div>
			<div>
				<Container className="py-5">
					<div className="d-flex align-items-center justify-content-between">
						<h1 className="font-celeste-crud">Administrador de turnos</h1>
					</div>
					<div className="d-flex   justify-content-around">
						<Link
							to="#"
							className=" btn-celeste-crud text-decoration-none text-center mx-3"
						>
							Agregar Turno
						</Link>
						<Link
							to="/vite-project/src/components/crudsAdmin/Admin.jsx"
							className="btn-celeste-crud text-decoration-none text-center mx-3"
						>
							Volver
						</Link>
					</div>

					<hr />
					{/* Table of products */}
					<h3 className="text-center bg-celeste-crud text-white">
						Turnos Dr. Sanchez
					</h3>
					<hr className="container" />
					{arrayAlejo.length !== 0 ? (
						<Table bordered hover responsive className="align-middle mt-3">
							<thead>
								<tr className="font-celeste-crud">
									<th>Mascota-Dueño</th>
									<th>Veterinario</th>
									<th>Detalle de cita</th>
									<th>Fecha / Hora</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{arrayAlejo.map((turno) => (
									<Turno
										turno={turno}
										key={turno._id}
										URLTurnos={URLTurnos}
										getApiTurnos={getApiTurnos}
									></Turno>
								))}
							</tbody>
						</Table>
					) : (
						<div className="no-products-found d-flex align-items-center justify-content-center">
							<h1>🐶 No hay ningún turno registrado 🐱</h1>
						</div>
					)}
					<hr className="container" />
					<h3 className="text-center bg-celeste-crud text-white">
						Turnos Dr. Rodriguez
					</h3>
					<hr className="container" />
					{arrayCamila.length !== 0 ? (
						<Table bordered hover responsive className="align-middle mt-3">
							<thead>
								<tr className="font-celeste-crud">
									<th>Mascota-Dueño</th>
									<th>Veterinario</th>
									<th>Detalle de cita</th>
									<th>Fecha / Hora</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{arrayCamila.map((turno) => (
									<Turno
										turno={turno}
										key={turno._id}
										URLTurnos={URLTurnos}
										getApiTurnos={getApiTurnos}
									></Turno>
								))}
							</tbody>
						</Table>
					) : (
						<div className="no-products-found d-flex align-items-center justify-content-center">
							<h1>🐶 No hay ningún turno registrado 🐱</h1>
						</div>
					)}
				</Container>
			</div>
		</div>
	);
};

export default AdminTurnos;
