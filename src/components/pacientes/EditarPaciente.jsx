import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { validateEmail, validateRequired } from '../Validation';

const EditarPaciente = ({ pacientes, onUpdate }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const paciente = pacientes.find((p) => p.id === id);

	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		email: '',
		telefono: '',
		mascota: '',
		especie: '',
		raza: '',
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (paciente) {
			setFormData(paciente);
		}
	}, [paciente]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};

		if (!validateRequired(formData.nombre)) {
			newErrors.nombre = 'El nombre es obligatorio';
		}
		if (!validateRequired(formData.apellido)) {
			newErrors.apellido = 'El apellido es obligatorio';
		}
		if (!validateEmail(formData.email)) {
			newErrors.email = 'Email no válido';
		}
		if (!validateRequired(formData.telefono)) {
			newErrors.telefono = 'El teléfono es obligatorio';
		}
		if (!validateRequired(formData.mascota)) {
			newErrors.mascota = 'El nombre de la mascota es obligatorio';
		}
		if (!validateRequired(formData.especie)) {
			newErrors.especie = 'La especie es obligatoria';
		}
		if (!validateRequired(formData.raza)) {
			newErrors.raza = 'La raza es obligatoria';
		}

		if (Object.keys(newErrors).length === 0) {
			onUpdate(formData);
			navigate('/admin/clientes');
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<Container>
			<h1 className="mt-4">Editar Paciente</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="nombre">
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						isInvalid={!!errors.nombre}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.nombre}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="apellido">
					<Form.Label>Apellido</Form.Label>
					<Form.Control
						type="text"
						name="apellido"
						value={formData.apellido}
						onChange={handleChange}
						isInvalid={!!errors.apellido}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.apellido}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="telefono">
					<Form.Label>Teléfono</Form.Label>
					<Form.Control
						type="text"
						name="telefono"
						value={formData.telefono}
						onChange={handleChange}
						isInvalid={!!errors.telefono}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.telefono}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="mascota">
					<Form.Label>Mascota</Form.Label>
					<Form.Control
						type="text"
						name="mascota"
						value={formData.mascota}
						onChange={handleChange}
						isInvalid={!!errors.mascota}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.mascota}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="especie">
					<Form.Label>Especie</Form.Label>
					<Form.Control
						type="text"
						name="especie"
						value={formData.especie}
						onChange={handleChange}
						isInvalid={!!errors.especie}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.especie}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="raza">
					<Form.Label>Raza</Form.Label>
					<Form.Control
						type="text"
						name="raza"
						value={formData.raza}
						onChange={handleChange}
						isInvalid={!!errors.raza}
					/>
					<Form.Control.Feedback type="invalid">{errors.raza}</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-3">
					Guardar Cambios
				</Button>
			</Form>
		</Container>
	);
};

export default EditarPaciente;
