import React, { useEffect, useState, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateTextoEsp } from '../Validaciones';
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';

const EditarTurnos = ({ URLTurnos, getApiTurnos, pacientes, turnos }) => {
	const navigate = useNavigate();
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;

	useEffect(() => {
		if (!session) {
			navigate('/');
		}
	}, [session, navigate]);

	const [turno, setTurno] = useState({});
	const [data, setData] = useState(setHours(setMinutes(new Date(), 0), 8));
	const [minDate, setMinDate] = useState(setHours(setMinutes(new Date(), 0), 8));
	const [turnoStr, setTurnoStr] = useState('');
	const [turnoVetFilter, setTurnoVetFilter] = useState([]);

	const { id } = useParams();
	const detalleCitaRef = useRef('');

	useEffect(() => {
		const fetchTurno = async () => {
			try {
				const res = await fetch(`${URLTurnos}/${id}`);
				const turnoApi = await res.json();
				setTurno(turnoApi);
				const startDate = new Date(turnoApi.startDate);
				setData(addDays(setHours(setMinutes(startDate, 0), 8), 2));
				setMinDate(addDays(setHours(setMinutes(startDate, 0), 8), 2));
				const filteredTurnos = turnos.filter(
					(turn) => turn.veterinario === turnoApi.veterinario
				);
				setTurnoVetFilter(filteredTurnos);
				setTurnoStr(startDate.toLocaleString());
			} catch (error) {
				console.log(error);
			}
		};

		fetchTurno();
	}, [URLTurnos, id, turnos]);

	const handleVetChange = (target) => {
		const vet = target.value.trimStart();
		setTurno({ ...turno, veterinario: vet });
		const filteredTurnos = turnos.filter((turn) => turn.veterinario === vet);
		setTurnoVetFilter(filteredTurnos);
	};

	const mapTurnos = turnoVetFilter.map((turno) => new Date(turno.startDate));
	const filterTurnos = mapTurnos.filter(
		(turno) => turno.getDate() === data.getDate()
	);
	const excTimes = filterTurnos.map((turno) =>
		setHours(setMinutes(turno, turno.getMinutes()), turno.getHours())
	);

	const includesTimes = [
		setHours(setMinutes(new Date(), 0), 8),
		setHours(setMinutes(new Date(), 0), 9),
		setHours(setMinutes(new Date(), 0), 10),
		setHours(setMinutes(new Date(), 0), 11),
		setHours(setMinutes(new Date(), 0), 12),
		setHours(setMinutes(new Date(), 0), 14),
		setHours(setMinutes(new Date(), 0), 15),
		setHours(setMinutes(new Date(), 0), 16),
		setHours(setMinutes(new Date(), 0), 17),
		setHours(setMinutes(new Date(), 0), 18),
	];

	const handleDateChange = (date) => {
		setData(date);
	};

	const validateInputs = () => {
		return (
			validateTextoEsp(turno.mascota) &&
			validateTextoEsp(turno.veterinario) &&
			validateTextoEsp(detalleCitaRef.current.value.trimStart()) &&
			testDate()
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateInputs()) {
			const turnoUpdate = {
				detalleCita: detalleCitaRef.current.value,
				veterinario: turno.veterinario,
				mascota: turno.mascota,
				startDate: data.toString(),
			};

			const result = await Swal.fire({
				title: '¿Estás seguro?',
				text: 'No puedes revertir esto',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Actualizar',
			});

			if (result.isConfirmed) {
				try {
					const res = await fetch(`${URLTurnos}/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(turnoUpdate),
					});
					if (res.status === 200) {
						Swal.fire('Actualizado!', 'Los datos fueron actualizados.', 'success');
						getApiTurnos();
						navigate(
							'/Veterinaria-FrontEnd/javapet-front/src/components/admin/AdminTurnos.jsx'
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
		} else {
			Swal.fire('Ops!', 'Debe completar todos los campos correctamente', 'error');
			testMasc();
			testVet();
			testDetail();
			testDate();
		}
	};

	const [inputMasc, setInputMasc] = useState('');
	const [inputVet, setInputVet] = useState('');
	const [inputDetail, setInputDetail] = useState('');
	const [inputDate, setInputDate] = useState('');

	useEffect(() => {
		setInputMasc(document.getElementById('inputMasc'));
		setInputVet(document.getElementById('inputVet'));
		setInputDetail(document.getElementById('inputDetail'));
		setInputDate(document.getElementById('inputDate'));
	}, []);

	const testMasc = () => {
		const isValid = validateTextoEsp(inputMasc.value) && inputMasc.value !== '';
		inputMasc.className = isValid
			? 'form-control is-valid'
			: 'form-control is-invalid';
		return isValid;
	};

	const testVet = () => {
		const isValid = validateTextoEsp(inputVet.value) && inputVet.value !== '';
		inputVet.className = isValid
			? 'form-control is-valid'
			: 'form-control is-invalid';
		return isValid;
	};

	const testDetail = () => {
		const isValid =
			validateTextoEsp(inputDetail.value) && inputDetail.value.length >= 4;
		inputDetail.className = isValid
			? 'form-control is-valid'
			: 'form-control is-invalid';
		return isValid;
	};

	const testDate = () => {
		const isValid = data.getDay() !== 0 && data.getDay() !== 6;
		inputDate.className = isValid
			? 'form-control is-valid mb-3'
			: 'form-control is-invalid mb-3';
		return isValid;
	};

	return (
		<div>
			<Container className="py-5">
				<h1 className="font-celeste-crud">Editar Turno</h1>
				<hr />
				<Form className="my-5" onSubmit={handleSubmit} noValidate>
					<Form.Group className="mb-3">
						<Form.Label className="font-celeste-crud" htmlFor="inputMasc">
							Mascota*
						</Form.Label>
						<Form.Select
							required
							id="inputMasc"
							value={turno.mascota}
							onChange={({ target }) => {
								setTurno({ ...turno, mascota: target.value });
								testMasc();
							}}
						>
							{pacientes.map((paciente) => (
								<option
									value={`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
									key={paciente._id}
								>
									{`${paciente.nombreMascota} - ${paciente.nombreDueño} ${paciente.apellidoDueño}`}
								</option>
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
						<Form.Select
							required
							id="inputVet"
							value={turno.veterinario}
							onChange={({ target }) => {
								handleVetChange(target);
								testVet();
							}}
						>
							<option value="Sanchez Alejo">Dr. Sanchez Alejo</option>
							<option value="Rodriguez Camila">Dr. Rodriguez Camila</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="fw-bold">
							Porfavor, seleccione un veterinario de la lista
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
							placeholder="Detalle de la cita"
							style={{ height: '100px' }}
							defaultValue={turno.detalleCita}
							ref={detalleCitaRef}
							minLength={4}
							maxLength={500}
							onChange={testDetail}
						/>
						<Form.Control.Feedback type="invalid" className="fw-bold">
							Ingrese el detalle de la cita (min. 4 caracteres, max. 500 caracteres)
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group>
						<Form.Label className="font-celeste-crud" htmlFor="inputDate">
							Seleccione fecha y hora su turno era " {turnoStr} "
						</Form.Label>
						<DatePicker
							required
							id="inputDate"
							locale={es}
							selected={data}
							onChange={(date) => {
								handleDateChange(date);
								testDate();
							}}
							onClickOutside={testDate}
							minDate={minDate}
							filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
							showTimeSelect
							excludeTimes={excTimes}
							includeTimes={includesTimes}
							dateFormat="Pp"
							className="container-fluid form-control mb-3"
						/>
					</Form.Group>

					<div className="d-flex justify-content-end">
						<button className="btn-celeste-crud text-center mx-1" type="submit">
							Guardar
						</button>
						<Link
							to="/Veterinaria-FrontEnd/javapet-front/src/components/admin/AdminTurnos.jsx"
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

export default EditarTurnos;
