import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contactanos/Contacto';
import Error404 from './components/Error404/Error404';
import Servicios from './components/Servicios/Servicios';
import AdminPacientes from './components/pacientes/AdminPacientes';
import AdminTurnos from './components/turnos/AdminTurnos';
import CrearPaciente from './components/pacientes/CrearPaciente';
import CrearTurno from './components/turnos/CrearTurno';
import EditarPacientes from './components/pacientes/EditarPaciente';
import EditarTurnos from './components/turnos/EditarTurno';
import Adultos from './components/Planes/Adultos';
import Madurando from './components/Planes/Madurando';
import Cachorro from './components/Planes/Cachorro';
import AdminHomePage from './components/AdminHomePage';

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [turnos, setTurnos] = useState([]);
	const [weather, setWeather] = useState({});
	const [user, setUser] = useState([]);

	// Define las URLs de las API aquí
	const URLPacientes = 'https://example.com/api/pacientes';
	const URLTurnos = 'https://example.com/api/turnos';
	const URLUser = 'https://example.com/api/user';
	const key = import.meta.env.VITE_API_KEY;

	const getApiPacientes = async () => {
		try {
			const response = await fetch('https://example.com/api/pacientes');
			const data = await response.json();
			setPacientes(data);
		} catch (error) {
			console.error('Failed to fetch pacientes', error);
		}
	};

	const getApiTurnos = async () => {
		try {
			const response = await fetch('https://example.com/api/turnos');
			const data = await response.json();
			setTurnos(data);
		} catch (error) {
			console.error('Failed to fetch turnos', error);
		}
	};

	const getApiUser = async () => {
		try {
			const response = await fetch('https://example.com/api/user');
			const data = await response.json();
			setUser(data);
		} catch (error) {
			console.error('Failed to fetch user', error);
		}
	};

	const getWeather = async () => {
		try {
			// Tu lógica para obtener el clima
		} catch (error) {
			console.error('Failed to fetch weather', error);
		}
	};
	const autoDelete = (turnos) => {
		const borrar = async (turno) => {
			if (new Date(turno.startDate) < new Date()) {
				const res = await fetch(`${URLTurnos}/${turno._id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (res.status === 200) {
					console.log('Se AUTO ELIMINARON LOS TURNOS VIEJOS');
				} else {
					console.log('Error de conexion con la BBDD');
				}
			}
		};
		turnos.map((turno) => borrar(turno));
	};

	return (
		<div>
			<BrowserRouter>
				<main>
					<Routes>
						{/* Corrige o elimina la ruta si el componente Index no existe */}
						{/* <Route path="/" element={<Index weather={weather} />} /> */}
						{/* <Route path="/QuienesSomos" element={<QuienesSomos />} /> */}
						<Route path="/Cachorro" element={<Cachorro />} />
						<Route path="/Madurando" element={<Madurando />} />
						<Route path="/Adultos" element={<Adultos />} />
						<Route path="*" element={<Error404 />} />
						<Route path="/NuestrosServicios" element={<Servicios />} />
						{/* <Route path="/Login" element={<Login user={user} />} /> */}
						<Route path="/Contactanos" element={<Contacto />} />
						<Route path="/Adm" element={<AdminHomePage turnos={turnos} />} />
						<Route
							path="/Adm/pacientes"
							element={
								<AdminPacientes
									pacientes={pacientes}
									URLPacientes={URLPacientes}
									getApiPacientes={getApiPacientes}
								/>
							}
						/>
						<Route
							path="/Adm/pacientes/crear"
							element={
								<CrearPaciente
									URLPacientes={URLPacientes}
									getApiPacientes={getApiPacientes}
								/>
							}
						/>
						<Route
							path="/Adm/pacientes/editar/:id"
							element={
								<EditarPacientes
									URLPacientes={URLPacientes}
									getApiPacientes={getApiPacientes}
								/>
							}
						/>
						<Route
							path="/Adm/turnos"
							element={
								<AdminTurnos
									turnos={turnos}
									URLTurnos={URLTurnos}
									getApiTurnos={getApiTurnos}
								/>
							}
						/>
						<Route
							path="/Adm/turnos/crear"
							element={
								<CrearTurno
									pacientes={pacientes}
									URLTurnos={URLTurnos}
									getApiTurnos={getApiTurnos}
									turnos={turnos}
								/>
							}
						/>
						<Route
							path="/Adm/turnos/editar/:id"
							element={
								<EditarTurnos
									URLTurnos={URLTurnos}
									getApiTurnos={getApiTurnos}
									pacientes={pacientes}
									turnos={turnos}
								/>
							}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
