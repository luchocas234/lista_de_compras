
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, cambiarTareas,fechanew}) => {
	const [inputTarea, cambiarInputTarea] = useState('');

	const handleInput = (e) => {
		cambiarInputTarea(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		cambiarTareas(
			[
				...tareas, 
				{
					id: uuidv4(),
					texto: inputTarea,
					completada: false,
					fechaCreada:fechanew(),
				}
			]
		);
		cambiarInputTarea('');
	}


	

	return (
		<form action="" className="formulario-tareas" onSubmit={handleSubmit}>
			<input
				type="text"
				className="formulario-tareas__input"
				placeholder="Escribe una tarea"
				value={inputTarea}
				onChange={(e) => handleInput(e)}
			/>
			{inputTarea !== '' ? 
			<button 
				type="submit"
				className="formulario-tareas__btn"
			>
				<FontAwesomeIcon 
					icon={faPlusSquare}
					className="formulario-tareas__icono-btn" 
				/>
			</button> : <div></div>}
			
		</form>
	);
}
 
export default FormularioTareas;