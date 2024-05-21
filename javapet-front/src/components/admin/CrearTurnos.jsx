import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateTextoEsp } from '../Validaciones';
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';
// Date-FNS: Para manipulación de fechas.
// React-DatePicker: Selector de fecha y hora.

const CrearTurno = ({ pacientes, URLTurnos, getApiTurnos, turnos }) => {
	const navigate = useNavigate();
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;

	useEffect(() => {
		if (!session) {
			navigate('/');
		}
	}, [session, navigate]);
	// Misma función que en los otros componentes

	const minDate = addDays(setHours(setMinutes(new Date(), 0), 8), 2);
	const [detalleCita, setDetalleCita] = useState('');
	const [veterinario, setVeterinario] = useState('');
	const [mascota, setMascota] = useState('');
	const [startDate, setStartDate] = useState(minDate);
	const [turnoVetFilter, setTurnoVetFilter] = useState([]);
	// Estado Inicial: Se definen los estados iniciales para los detalles de la cita, el veterinario, la mascota, la fecha de inicio y los turnos filtrados.
	// minDate: Se calcula la fecha mínima para seleccionar, que es dos días a partir del día actual a las 8:00 AM.

	const handleVetChange = ({ target }) => {
		const vet = target.value.trimStart();
		setVeterinario(vet);
		setTurnoVetFilter(turnos.filter((turno) => turno.veterinario === vet));
	};

	const handleDateChange = (date) => {
		setStartDate(date);
	};
	// handleVetChange: Actualiza el estado del veterinario y filtra los turnos disponibles para ese veterinario.
	//  handleDateChange: Actualiza el estado de la fecha de inicio cuando el usuario selecciona una nueva fecha.
	const validateFields = () => {
		return (
			validateTextoEsp(detalleCita) &&
			validateTextoEsp(veterinario) &&
			validateTextoEsp(mascota) &&
			startDate.getDay() !== 0 &&
			startDate.getDay() !== 6
		);
	};
	// validateFields: Valida que todos los campos tengan valores correctos y que la fecha seleccionada no sea fin de semana.
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateFields()) {
			const newTurno = {
				detalleCita,
				veterinario,
				mascota,
				startDate: startDate.toString(),
			};

			const result = await Swal.fire({
				title: 'Estas Seguro?',
				text: 'No puedes revertir esto',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Guardar',
			});

			if (result.isConfirmed) {
				try {
					const res = await fetch(URLTurnos, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(newTurno),
					});
					if (res.status === 201) {
						Swal.fire('Creado!', 'El turno fue creado.', 'success');
						getApiTurnos();
						navigate('/Adm/turnos');
					}
				} catch (error) {
					console.log(error);
				}
			}
		} else {
			Swal.fire('Ops!', 'Debe completar todos los campos correctamente', 'error');
		}
	};
	// handleSubmit: Previene el comportamiento por defecto del formulario, valida los campos, crea un nuevo objeto newTurno con los datos del formulario, muestra una alerta de confirmación, si el usuario confirma, envía los datos al servidor usando fetch, si la creación es exitosa, muestra una alerta de éxito, actualiza la lista de turnos y redirige al usuario.
	return (
		<div>
			<Container className="py-5">
				<h1 className="font-celeste-crud">Agregar Turno</h1>
				<hr />
				<Form className="my-5" onSubmit={handleSubmit} noValidate>
					<Form.Group className="mb-3">
						<Form.Label className="font-celeste-crud" htmlFor="inputMasc">
							Mascota*
						</Form.Label>
						<Form.Select
							required
							id="inputMasc"
							onChange={({ target }) => setMascota(target.value.trimStart())}
						>
							<option value="">Selecciona una mascota</option>
							{pacientes.map((paciente) => (
								<option
									value={`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
									key={paciente._id}
								>{`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}</option>
							))}
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="fw-bold">
							Seleccione una mascota de la lista
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className="font-celeste-crud" htmlFor="inputVet">
							Veterinario*
						</Form.Label>
						<Form.Select required id="inputVet" onChange={handleVetChange}>
							<option value="">Selecciona un Veterinario</option>
							<option value="Molinari Pablo">Dr. Molinari Pablo</option>
							<option value="Kuc Damian">Dr. Kuc Damian</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="fw-bold">
							Seleccione un veterinario de la lista
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className="font-celeste-crud" htmlFor="inputDetail">
							Detalle de Cita*
						</Form.Label>
						<Form.Control
							required
							id="inputDetail"
							as="textarea"
							type="text"
							placeholder="Ej: Control"
							minLength={4}
							maxLength={500}
							style={{ height: '100px' }}
							onChange={({ target }) => setDetalleCita(target.value.trimStart())}
						/>
						<Form.Control.Feedback type="invalid" className="fw-bold">
							Ingrese el detalle de la cita (min. 4 caracteres, max. 500 caracteres)
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group>
						<Form.Label className="font-celeste-crud" htmlFor="inputDate">
							Seleccione fecha y hora (los turnos se reservan con 2 dias de
							anticipacion)
						</Form.Label>
						<DatePicker
							required
							id="inputDate"
							locale={es}
							selected={startDate}
							onChange={handleDateChange}
							minDate={minDate}
							filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
							showTimeSelect
							dateFormat="Pp"
							className="container-fluid form-control mb-3"
						/>
					</Form.Group>

					<div className="d-flex justify-content-end">
						<button className="btn-celeste-crud mx-1 text-center">Guardar</button>
						<Link
							to="/Adm/turnos"
							className="btn-red-crud text-decoration-none text-center mx-1"
						>
							Cancelar
						</Link>
					</div>
				</Form>
			</Container>
		</div>
	);
};

export default CrearTurno;
