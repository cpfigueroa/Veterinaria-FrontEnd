import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from './components/AdminHomePage';
import AdminPacientes from './components/pacientes/AdminPacientes';
import CrearPaciente from './components/pacientes/CrearPaciente';
import EditarPaciente from './components/pacientes/EditarPaciente';
import AdminTurnos from './components/turnos/AdminTurnos';
import CrearTurno from './components/turnos/CrearTurno';
import EditarTurno from './components/turnos/EditarTurno';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [turnos, setTurnos] = useState([]);

	const handlePacienteUpdate = (formData) => {
		// Lógica para actualizar un paciente
	};

	const handleTurnoUpdate = (formData) => {
		// Lógica para actualizar un turno
	};

	return (
		<div>
			<BrowserRouter>
				<Router>
					<Routes>
						<Route path="/" element={<AdminHomePage />} />
						<Route path="/admin" element={<AdminHomePage />} />
						<Route
							path="/admin/pacientes"
							element={<AdminPacientes pacientes={pacientes} />}
						/>
						<Route path="/admin/pacientes/create" element={<CrearPaciente />} />
						<Route
							path="/admin/pacientes/edit/:id"
							element={
								<EditarPaciente
									pacientes={pacientes}
									onUpdate={handlePacienteUpdate}
								/>
							}
						/>
						<Route path="/admin/turnos" element={<AdminTurnos turnos={turnos} />} />
						<Route path="/admin/turnos/create" element={<CrearTurno />} />
						<Route
							path="/admin/turnos/edit/:id"
							element={<EditarTurno turnos={turnos} onUpdate={handleTurnoUpdate} />}
						/>
					</Routes>
				</Router>
			</BrowserRouter>
		</div>
	);
}

export default App;
