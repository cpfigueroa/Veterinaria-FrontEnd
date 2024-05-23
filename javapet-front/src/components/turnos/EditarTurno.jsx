import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { validateRequired } from '../Validation';

const EditarTurno = ({ turnos, onUpdate }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const turno = turnos.find((t) => t.id === id);

	const [formData, setFormData] = useState({
		detalleCita: '',
		veterinario: '',
		mascota: '',
		fecha: '',
		hora: '',
	});

	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (turno) {
			setFormData(turno);
		}
	}, [turno]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};

		if (!validateRequired(formData.detalleCita)) {
			newErrors.detalleCita = 'El detalle de la cita es obligatorio';
		}
		if (!validateRequired(formData.veterinario)) {
			newErrors.veterinario = 'El nombre del veterinario es obligatorio';
		}
		if (!validateRequired(formData.mascota)) {
			newErrors.mascota = 'El nombre de la mascota es obligatorio';
		}
		if (!validateRequired(formData.fecha)) {
			newErrors.fecha = 'La fecha es obligatoria';
		}
		if (!validateRequired(formData.hora)) {
			newErrors.hora = 'La hora es obligatoria';
		}

		if (Object.keys(newErrors).length === 0) {
			onUpdate(formData);
			navigate('/admin/turnos');
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<Container>
			<h1 className="mt-4">Editar Turno</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="detalleCita">
					<Form.Label>Detalle de Cita</Form.Label>
					<Form.Control
						type="text"
						name="detalleCita"
						value={formData.detalleCita}
						onChange={handleChange}
						isInvalid={!!errors.detalleCita}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.detalleCita}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="veterinario">
					<Form.Label>Veterinario</Form.Label>
					<Form.Control
						type="text"
						name="veterinario"
						value={formData.veterinario}
						onChange={handleChange}
						isInvalid={!!errors.veterinario}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.veterinario}
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
				<Form.Group controlId="fecha">
					<Form.Label>Fecha</Form.Label>
					<Form.Control
						type="date"
						name="fecha"
						value={formData.fecha}
						onChange={handleChange}
						isInvalid={!!errors.fecha}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.fecha}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="hora">
					<Form.Label>Hora</Form.Label>
					<Form.Control
						type="time"
						name="hora"
						value={formData.hora}
						onChange={handleChange}
						isInvalid={!!errors.hora}
					/>
					<Form.Control.Feedback type="invalid">{errors.hora}</Form.Control.Feedback>
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-3">
					Guardar Cambios
				</Button>
			</Form>
		</Container>
	);
};

export default EditarTurno;
