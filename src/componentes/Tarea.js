import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Tarea({tarea, toggleCompletada, editarTarea, borrarTarea}) {

    //Este estado será el activador para que sepa si estoy editando la tarea o no.
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    // Estado para el formulario, accede a la tarea que traemos por medio de props. tarea.text así podemos editar la tarea directamente.
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    } 

   
      
        


  return (

    // Creamos un elemento li que es lo que va a ser este componente. Dentro coloca
    <li className='lista-tareas__tarea'>

        <FontAwesomeIcon 
        icon={tarea.completada ? faCheckSquare : faSquare} 
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={ () => toggleCompletada(tarea.id)}
        />

        <div className='lista-tareas__texto'>
            {editandoTarea ? 
            <form action='' className='formulario-editar-tarea' onSubmit={handleSubmit}
            >
                {/* Si estamos trabajando con un form en react hay que agregar el Value: y onChange y ademas un Estado nuevo para el Formulario */}
                <input type="text" className='formulario-editar-tarea__input'
                value={nuevaTarea}
                // llamamos al evento 'e' y luego vamos al objetivo y al valor de 'e' = e.target.value
                onChange={(e) => cambiarNuevaTarea(e.target.value)}
                />
                <button type='submit'
                    className='formulario-editar-tarea__btn'>
                        Actualizar
                </button>
            </form>
            : tarea.texto
            } 
        </div>

        <div className='lista-tareas__contenedor-botones'>
        {/* Fecha de creacion  */}
        {tarea.completada ? <p className='lista-tareas__fecha lista-tareas__fecha-accion'>Completada: {tarea.fechaCompletada}</p> :
         <p className='lista-tareas__fecha lista-tareas__fecha-accion'>Creada: {tarea.fechaCreada}</p> }
        
        
        {/* Icono de Editar */}
        <FontAwesomeIcon 
        icon={faEdit} 
        className="lista-tareas__icono lista-tareas__icono-accion"
        onClick={()=> cambiarEditandoTarea(!editandoTarea)}/>
        {/* Icono de Borrar */}
        <FontAwesomeIcon 
        icon={faTimes} 
        className="lista-tareas__icono lista-tareas__icono-accion"
        onClick={() => borrarTarea(tarea.id)}/>
        </div>
        
        {/* Icono-accion te permite que solo se vea el icono cuando pasa el cursor sobre la tarea */}
    </li>
  )
}
