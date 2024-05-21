import React, { useRef, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateTexto, validateEmail, validateTelefono } from '../Validaciones';

const EditarPacientes = ({ URLPacientes, getApiPacientes }) => {
	const navigate = useNavigate();
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;

	useEffect(() => {
		if (!session) {
			navigate('/');
		}
	}, [session, navigate]);

	const [paciente, setPaciente] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchPaciente = async () => {
			try {
				const res = await fetch(`${URLPacientes}/${id}`);
				const pacienteApi = await res.json();
				setPaciente(pacienteApi);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPaciente();
	}, [URLPacientes, id]);

	const refs = {
		nombreDueño: useRef(''),
		apellidoDueño: useRef(''),
		email: useRef(''),
		telefono: useRef(''),
		nombreMascota: useRef(''),
		especieMascota: useRef(''),
		razaMascota: useRef(''),
	};

	const tests = {
		nombreDueño: () =>
			validateTexto(refs.nombreDueño.current.value) &&
			refs.nombreDueño.current.value.length >= 4,
		apellidoDueño: () =>
			validateTexto(refs.apellidoDueño.current.value) &&
			refs.apellidoDueño.current.value.length >= 2,
		email: () => validateEmail(refs.email.current.value),
		telefono: () =>
			validateTelefono(refs.telefono.current.value) &&
			refs.telefono.current.value.length >= 7,
		nombreMascota: () =>
			validateTexto(refs.nombreMascota.current.value) &&
			refs.nombreMascota.current.value.length >= 4,
		especieMascota: () =>
			validateTexto(refs.especieMascota.current.value) &&
			refs.especieMascota.current.value.length >= 4,
		razaMascota: () =>
			validateTexto(refs.razaMascota.current.value) &&
			refs.razaMascota.current.value.length >= 4,
	};
	// Forma mas concisa y organizada de definir las funciones en vez de usar if
	const validateAll = () => Object.values(tests).every((test) => test());

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateAll()) {
			const pacienteUpdate = {
				nombreDueño: refs.nombreDueño.current.value,
				apellidoDueño: refs.apellidoDueño.current.value,
				email: refs.email.current.value,
				telefono: refs.telefono.current.value,
				nombreMascota: refs.nombreMascota.current.value,
				especieMascota: refs.especieMascota.current.value,
				razaMascota: refs.razaMascota.current.value,
			};

			Swal.fire({
				title: '¿Estás seguro?',
				text: 'No puedes revertir esto',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Actualizar',
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						const res = await fetch(`${URLPacientes}/${id}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(pacienteUpdate),
						});
						if (res.status === 200) {
							Swal.fire('Actualizado!', 'Los datos fueron actualizados.', 'success');
							getApiPacientes();
							navigate('/Adm/pacientes');
						}
					} catch (error) {
						console.log(error);
					}
				}
			});
		} else {
			Swal.fire('Ops!', 'Debe completar todos los campos correctamente', 'error');
		}
	};

	return (
		<div>
			<Container className="py-5">
				<h1 className="font-celeste-crud">Editar Paciente</h1>
				<hr />
				<Form className="my-5" onSubmit={handleSubmit} noValidate>
					<h2 className="text-center font-celeste-crud">Información</h2>
					<hr />
					<Row>
						<Col xs={12} md={6}>
							<h3 className="text-center font-celeste-crud">Dueño</h3>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputName">
									Nombre*
								</Form.Label>
								<Form.Control
									required
									id="inputName"
									type="text"
									placeholder="Nombre"
									defaultValue={paciente.nombreDueño}
									minLength={4}
									maxLength={60}
									ref={refs.nombreDueño}
									className="form-control"
									isInvalid={!tests.nombreDueño()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese su Nombre (min. 4 caracteres, max. 60 caracteres, SOLO
									LETRAS)
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputSName">
									Apellido*
								</Form.Label>
								<Form.Control
									required
									id="inputSName"
									type="text"
									placeholder="Apellido"
									minLength={2}
									maxLength={60}
									defaultValue={paciente.apellidoDueño}
									ref={refs.apellidoDueño}
									className="form-control"
									isInvalid={!tests.apellidoDueño()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese su Apellido (min. 2 caracteres, max. 60 caracteres, SOLO
									LETRAS)
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputEmail">
									Email*
								</Form.Label>
								<Form.Control
									required
									id="inputEmail"
									type="email"
									placeholder="email@dominio.com"
									defaultValue={paciente.email}
									ref={refs.email}
									className="form-control"
									isInvalid={!tests.email()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese un email válido
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputTel">
									Teléfono*
								</Form.Label>
								<Form.Control
									required
									id="inputTel"
									type="tel"
									placeholder="3816000000"
									minLength={7}
									maxLength={20}
									defaultValue={paciente.telefono}
									ref={refs.telefono}
									className="form-control"
									isInvalid={!tests.telefono()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese un número de teléfono válido
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						<Col xs={12} md={6}>
							<h3 className="text-center font-celeste-crud">Mascota</h3>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputMasc">
									Nombre Mascota*
								</Form.Label>
								<Form.Control
									required
									id="inputMasc"
									type="text"
									placeholder="Nombre Mascota"
									minLength={3}
									maxLength={50}
									defaultValue={paciente.nombreMascota}
									ref={refs.nombreMascota}
									className="form-control"
									isInvalid={!tests.nombreMascota()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese un Nombre (min. 3 caracteres, max. 50 caracteres, SOLO
									LETRAS)
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputEsp">
									Especie*
								</Form.Label>
								<Form.Control
									required
									id="inputEsp"
									type="text"
									placeholder="Especie"
									minLength={3}
									maxLength={50}
									defaultValue={paciente.especieMascota}
									ref={refs.especieMascota}
									className="form-control"
									isInvalid={!tests.especieMascota()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese una Especie (min. 3 caracteres, max. 50 caracteres, SOLO
									LETRAS)
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label className="font-celeste-crud" htmlFor="inputRaza">
									Raza*
								</Form.Label>
								<Form.Control
									required
									id="inputRaza"
									type="text"
									placeholder="Raza"
									minLength={3}
									maxLength={50}
									defaultValue={paciente.razaMascota}
									ref={refs.razaMascota}
									className="form-control"
									isInvalid={!tests.razaMascota()}
								/>
								<Form.Control.Feedback type="invalid" className="fw-bold">
									Ingrese una Raza (min. 3 caracteres, max. 50 caracteres, SOLO
									LETRAS)
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
					</Row>
					<div className="d-flex justify-content-end">
						<button className="btn-celeste-crud text-center mx-1" type="submit">
							Guardar
						</button>
						<Link
							to="/Veterinaria-FrontEnd/javapet-front/src/components/admin/AdminPacientes.jsx"
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

export default EditarPacientes;
