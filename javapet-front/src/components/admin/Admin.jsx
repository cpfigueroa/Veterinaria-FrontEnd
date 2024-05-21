import React from 'react';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const admin = ({ turnos }) => {
	// Esto define una función de flecha Admin, toma un objeto destructurado como argumento, y extrae la propiedad turnos. Para acceder directamente a turnos dentro del cuerpo de la función.
	const navigate = useNavigate();
	// Utilizo el hook useNavigate para obtener una función de navegación,para cambiar la ubicación de la página programáticamente.
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;
	// Aquí obtengo el estado de la sesión del almacenamiento de sesión del navegador (sessionStorage), busco un elemento llamado "stateSession" en el almacenamiento de sesión e intento convertir su valor de cadena JSON a un objeto JavaScript utilizando JSON.parse(). Si no se encuentra ningún estado de sesión o hay un problema, se establece session en false.

	const checkSession = () => {
		if (!session) {
			navigate('/');
		}
	};
	// Defino la funcion checkSession, verifico si no hay una sesion activa con !session, y si es asi utilizo la duncion navigate para redirigir al usuario.

	useEffect(() => {
		checkSession();
	}, []);
	//  Uso el hook useEffect para ejecutar checkSession una vez, cuando el componente se monta por primera vez (debido a la matriz de dependencias vacía []). Esto asegura que la sesión del usuario se compruebe una vez cuando el componente se carga por primera vez.

	const sortTurnos = turnos;
	// Creo una copia superficial del array turnos asignándolo a la variable sortTurnos. Esto no crea un nuevo array, sino una nueva referencia a la misma matriz.
	sortTurnos.sort((a, b) => {
		const as = a.startDate;
		const ad = new Date(as);
		const bs = b.startDate;
		const bd = new Date(bs);
		return ad - bd;
	});
	// Se ordena el array sortTurnos en función de la fecha de inicio de los turnos. La función de comparación proporcionada compara las fechas de inicio de los turnos y devuelve un número negativo si a debe venir antes que b, un número positivo si b debe venir antes que a, y cero si son iguales.
	const arrayAlejo = sortTurnos.filter(
		(turno) => turno.veterinario === 'Sanchez Alejo'
	);
	const arrayCamila = sortTurnos.filter(
		(turno) => turno.veterinario === 'Rodriguez Camila'
	);
	// Filtro el array sortTurnos para obtener solo los turnos asignados a un veterinario en especifico, y se crea un nuevo array que contiene solo estos turnos.
	return (
		<div>
			<div className="container">
				<h1 className="text-center my-3 font-celeste-crud">Administración</h1>
				<h3 className="text-center font-celeste-crud">¡Bienvenido Admin!</h3>
				<h5 className="text-end fs-6">Versión JavaPet : 1.0.0</h5>
				<hr />
				<div className="d-flex justify-content-around">
					<Link to="#" className="btn-celeste-crud text-decoration-none">
						Administrar Pacientes
					</Link>
					<Link to="#" className="btn-celeste-crud text-decoration-none">
						Administrar Turnos
					</Link>
				</div>
				<hr />
				<h2 className="text-center bg-celeste-crud text-white">Turnos Asignados</h2>
				<hr className="container" />
				<h3 className="text-center bg-celeste-crud text-white">
					Turnos Dr. Sanchez
				</h3>
				<hr className="container" />
				{arrayAlejo.length !== 0 ? (
					<Row>
						{arrayAlejo.map((turno) => (
							<Col xl={3} lg={4} md={6} xs={12} key={turno._id}>
								<CardTurnos turno={turno}></CardTurnos>
							</Col>
						))}
					</Row>
				) : (
					<div className="no-products-found d-flex align-items-center justify-content-center">
						<h1>🐶🐱 No hay turnos asignados 🐱🐶</h1>
					</div>
				)}
				<hr className="container" />
				<h3 className="text-center bg-celeste-crud text-white">
					Turnos Dr. Rodriguez
				</h3>
				<hr className="container" />
				{arrayCamila.length !== 0 ? (
					<Row>
						{arrayCamila.map((turno) => (
							<Col xl={3} lg={4} md={6} xs={12} key={turno._id}>
								<CardTurnos turno={turno}></CardTurnos>
							</Col>
						))}
					</Row>
				) : (
					<div className="no-products-found d-flex align-items-center justify-content-center">
						<h1>🐶 No hay ningún turno asignado 🐱</h1>
					</div>
				)}
				<hr className="container" />
			</div>
		</div>
	);
};

export default admin;
