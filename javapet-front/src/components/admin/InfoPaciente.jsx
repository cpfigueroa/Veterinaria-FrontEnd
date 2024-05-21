import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const InfoPaciente = ({ paciente, URLPacientes, getApiPacientes }) => {
	const handleDelete = async (id) => {
		const result = await Swal.fire({
			title: '¿Estás seguro de eliminar este paciente?',
			text: '¡No puedes revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Borrar',
		});

		if (result.isConfirmed) {
			try {
				const res = await fetch(`${URLPacientes}/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (res.status === 200) {
					Swal.fire('¡Borrado!', 'El paciente ha sido borrado.', 'success');
					getApiPacientes();
				} else {
					throw new Error('Error al borrar el paciente');
				}
			} catch (error) {
				Swal.fire('Error', 'Hubo un problema al borrar el paciente.', 'error');
				console.log(error);
			}
		}
	};

	return (
		<tr>
			<td>{paciente.nombreDueño}</td>
			<td>{paciente.apellidoDueño}</td>
			<td>{paciente.telefono}</td>
			<td>{paciente.email}</td>
			<td>{paciente.nombreMascota}</td>
			<td>{paciente.especieMascota}</td>
			<td>{paciente.razaMascota}</td>
			<td className="w-25">
				<div className="d-flex justify-content-center">
					<Link
						to={`/Veterinaria-FrontEnd/javapet-front/src/components/admin/EditarPacientes.jsx${paciente._id}`}
						className="btn-celeste-crud mx-1 text-decoration-none text-center"
					>
						Editar
					</Link>
					<button
						className="btn-red-crud mx-1"
						onClick={() => handleDelete(paciente._id)}
					>
						Borrar
					</button>
				</div>
			</td>
		</tr>
	);
};

export default InfoPaciente;
