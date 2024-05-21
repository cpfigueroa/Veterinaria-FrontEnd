import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { validateTexto, validateEmail, validateTelefono } from '../Validaciones';
import { Link, useNavigate } from 'react-router-dom';

const CrearPaciente = ({ URLPacientes, getApiPacientes }) => {
	const navigate = useNavigate();
	const session = JSON.parse(sessionStorage.getItem('stateSession')) || false;

	useEffect(() => {
		if (!session) {
			navigate('/');
		}
	}, [session, navigate]);

	const [formData, setFormData] = useState({
		nombreDueño: '',
		apellidoDueño: '',
		email: '',
		telefono: '',
		nombreMascota: '',
		especieMascota: '',
		razaMascota: '',
	});

	const [inputRefs, setInputRefs] = useState({});

	useEffect(() => {
		setInputRefs({
			inputName: document.getElementById('inputName'),
			inputSName: document.getElementById('inputSName'),
			inputEmail: document.getElementById('inputEmail'),
			inputTel: document.getElementById('inputTel'),
			inputMasc: document.getElementById('inputMasc'),
			inputEsp: document.getElementById('inputEsp'),
			inputRaza: document.getElementById('inputRaza'),
		});
	}, []);
	//   En esta sección, inicializamos el estado para manejar los datos del formulario y las referencias de los inputs. También configuramos un useEffect para redirigir si no hay una sesión activa.
	const validateInput = (input, validator, minLength = 0) => {
		if (validator(input.value) && input.value.length >= minLength) {
			input.className = 'form-control is-valid';
			return true;
		} else {
			input.className = 'form-control is-invalid';
			return false;
		}
	};

	const validateFields = () => {
		const {
			inputName,
			inputSName,
			inputEmail,
			inputTel,
			inputMasc,
			inputEsp,
			inputRaza,
		} = inputRefs;
		return (
			validateInput(inputName, validateTexto, 4) &&
			validateInput(inputSName, validateTexto, 2) &&
			validateInput(inputEmail, validateEmail) &&
			validateInput(inputTel, validateTelefono, 7) &&
			validateInput(inputMasc, validateTexto, 4) &&
			validateInput(inputEsp, validateTexto, 4) &&
			validateInput(inputRaza, validateTexto, 4)
		);
	};
	// Estas funciones validan los campos individuales y actualizan sus clases CSS para proporcionar retroalimentación visual al usuario.

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateFields()) {
			const newPaciente = { ...formData };
			Swal.fire({
				title: '¿Estás seguro?',
				text: 'No puedes revertir esto',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Guardar',
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						const res = await fetch(URLPacientes, {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(newPaciente),
						});
						if (res.status === 201) {
							Swal.fire('Creado!', 'El paciente fue creado.', 'success');
							getApiPacientes();
							navigate('/Adm/pacientes');
						}
					} catch (error) {
						console.error(error);
					}
				}
			});
		} else {
			Swal.fire('Ops!', 'Debe completar todos los campos correctamente', 'error');
		}
	};

	// handleSubmit maneja el envío del formulario, mostrando una alerta de confirmación y enviando los datos si el usuario confirma. Si la solicitud es exitosa, redirige a la página de pacientes.

	return (
		<div>
			<Container className="py-5">
				<h1 className="font-celeste-crud">Crear Paciente</h1>
				<hr />
				<Form className="my-5" onSubmit={handleSubmit} noValidate>
					<h2 className="text-center font-celeste-crud">Información</h2>
					<hr />
					<Row>
						<Col xs={12} md={6}>
							<h3 className="text-center font-celeste-crud">Dueño</h3>
							{['Nombre', 'Apellido', 'Email', 'Telefono'].map((field, idx) => (
								<Form.Group className="mb-3" key={idx}>
									<Form.Label
										className="font-celeste-crud"
										htmlFor={`input${field}`}
									>
										{field}*
									</Form.Label>
									<Form.Control
										required
										id={`input${field}`}
										type={field === 'Email' ? 'email' : 'text'}
										placeholder={field}
										minLength={field === 'Nombre' ? 4 : 2}
										maxLength={60}
										onChange={({ target }) => {
											setFormData((prev) => ({
												...prev,
												[`${field.toLowerCase()}Dueño`]: target.value.trimStart(),
											}));
											validateInput(
												target,
												field === 'Email' ? validateEmail : validateTexto,
												field === 'Nombre' ? 4 : 2
											);
										}}
									/>
									<Form.Control.Feedback type="invalid" className="fw-bold">
										Ingrese su {field} (min. {field === 'Nombre' ? 4 : 2} caracteres,
										max. 60 caracteres)
									</Form.Control.Feedback>
								</Form.Group>
							))}
						</Col>
						<Col xs={12} md={6}>
							<h3 className="text-center font-celeste-crud">Mascota</h3>
							{['Nombre Mascota', 'Especie', 'Raza'].map((field, idx) => (
								<Form.Group className="mb-3" key={idx}>
									<Form.Label
										className="font-celeste-crud"
										htmlFor={`input${field.replace(' ', '')}`}
									>
										{field}*
									</Form.Label>
									<Form.Control
										required
										id={`input${field.replace(' ', '')}`}
										type="text"
										placeholder={field}
										minLength={3}
										maxLength={50}
										onChange={({ target }) => {
											setFormData((prev) => ({
												...prev,
												[field.replace(' ', '').toLowerCase()]:
													target.value.trimStart(),
											}));
											validateInput(target, validateTexto, 3);
										}}
									/>
									<Form.Control.Feedback type="invalid" className="fw-bold">
										Ingrese un {field} (min. 3 caracteres, max. 50 caracteres)
									</Form.Control.Feedback>
								</Form.Group>
							))}
						</Col>
					</Row>
					<div className="d-flex justify-content-end">
						<button className="btn-celeste-crud text-center mx-1">Guardar</button>
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
// Aquí se renderiza el formulario con campos para el dueño y la mascota, cada uno con su respectivo Form.Group. Los botones Guardar y Cancelar permiten al usuario enviar el formulario o cancelar la operación.

export default CrearPaciente;
