import React, { useRef, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Adultos = () => {
	const navigate = useNavigate();
	const form = useRef();
	const [inputUser, setInputUser] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	useEffect(() => {
		setInputUser(document.getElementById('exampleInputName'));
		setInputEmail(document.getElementById('exampleInputEmail'));
	}, []);
	const gralValidate = () => {
		if (
			validateTexto(form.current.user_name.value.trimStart()) &&
			validateEmail(form.current.user_email.value.trimStart())
		) {
			return true;
		} else {
			return false;
		}
	};

	const testEmail = () => {
		if (validateEmail(inputEmail.value)) {
			inputEmail.className = 'form-control is-valid';
			return true;
		} else {
			inputEmail.className = 'form-control is-invalid';
			return false;
		}
	};

	const testUser = () => {
		if (validateTexto(inputUser.value) && inputUser.value.length >= 4) {
			inputUser.className = 'form-control is-valid';
			return true;
		} else {
			inputUser.className = 'form-control is-invalid';
			return false;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (gralValidate()) {
			emailjs
				.sendForm(
					'service_zu85aso',
					'template_wenn5tm',
					form.current,
					'user_QppiDb4vLZrsgJIksRfUR'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			Swal.fire('Consulta enviada!', 'Le responderemos a la brevedad', 'success');
			navigate('/');
		} else if (testUser()) {
			Swal.fire('Ops!', 'Por favor ingrese su email', 'error');
			inputEmail.className = 'form-control is-invalid';
		} else if (testEmail()) {
			Swal.fire('Ops!', 'Por favor ingrese su nombre', 'error');
			inputUser.className = 'form-control is-invalid';
		} else {
			Swal.fire('Ops!', 'Debe completar todos los campos', 'error');
			inputEmail.className = 'form-control is-invalid';
			inputUser.className = 'form-control is-invalid';
		}
	};

	return (
		<>
			<div className="imgA container-fluid">
				<div className="p-5 container">
					<div className="d-flex justify-content-evenly flex-container">
						<ul className="list-group text-center">
							<h2 className="colorfuente display-6">Adultos</h2>
							<h5 className="colorfuente ">Cobertura y Servicios</h5>
							<li className="list-group-item rounded-pill">
								Consultas de Urgencias las 24hs
							</li>
							<li className="rounded-pill text-center m-2 colorfuente estlist">
								Consultas a domicilio
							</li>
							<li className="list-group-item rounded-pill">Vacunas y remedios</li>
							<li className="rounded-pill text-center m-2 colorfuente estlist">
								Analisis Clinicos
							</li>
							<li className="list-group-item rounded-pill">Consulta virtual</li>
							<li className="rounded-pill text-center m-2 colorfuente estlist">
								Cirugias
							</li>
							<li className="list-group-item rounded-pill">Castración</li>
						</ul>
					</div>
				</div>
			</div>
			<hr />
			<h4 className="text-center colorfuente">
				Solicitar información completa de este plan
			</h4>
			<div className="d-flex justify-content-center">
				<div className="col-md-5 col-sm-12 text-center ">
					<Form ref={form} onSubmit={handleSubmit} noValidate>
						<div className="mb-3">
							<label htmlFor="exampleInputName" className="form-label">
								Ingrese su nombre
							</label>
							<input
								required
								type="text"
								className="form-control"
								name="user_name"
								placeholder="JavaPet"
								id="exampleInputName"
								minLength={4}
								maxLength={60}
								onChange={testUser}
							/>
							<Form.Control.Feedback type="invalid">
								Ingrese su Nombre y Apellido (min. 3 caracteres, max. 50 caracteres,
								SOLO LETRAS)
							</Form.Control.Feedback>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail" className="form-label">
								Ingrese su email
							</label>
							<input
								required
								type="email"
								className="form-control"
								id="exampleInputEmail"
								aria-describedby="emailHelp"
								name="user_email"
								placeholder="JavaPet@gmail.com"
								onChange={testEmail}
							/>
							<Form.Control.Feedback type="invalid">
								Ingrese un email valido
							</Form.Control.Feedback>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputMessage" className="form-label">
								Consulta
							</label>
							<input
								type="text"
								className="form-control"
								name="message"
								defaultValue='Plan Mensual "ADULTOS" de mas de 10 años'
								readOnly
							/>
						</div>
						<div>
							<button className="btn-celeste-serv text-end">CONSULTAR</button>
						</div>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Adultos;
