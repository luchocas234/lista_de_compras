import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Tarea({tarea, toggleCompletada, editarTarea,editarPrecio, borrarTarea}) {

    //Este estado será el activador para que sepa si estoy editando la tarea o no.
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    // Estado para el formulario, accede a la tarea que traemos por medio de props. tarea.text así podemos editar la tarea directamente.
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

    const [editandoPrecio, cambiarEditandoPrecio] =useState(false);

    const [precio, cambiarPrecio]= useState(tarea.precio)

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    } 
    const handleSubmitprecio = (e) => {
        e.preventDefault();
        editarPrecio(tarea.id, precio);
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
{/* -------- Form Precio -------- */}
        <div className="precio-form">
        
        <form action='' className='formulario-editar-tarea' onSubmit={handleSubmitprecio}
            >
                <input type="number" 
                step="0.1"
                className='formulario-editar-precio__input'
                value={precio}
                // llamamos al evento 'e' y luego vamos al objetivo y al valor de 'e' = e.target.value
                                    
                onChange={(e) => cambiarPrecio(Number(e.target.value))}
                />
                {/* <button type='submit'
                    className='formulario-editar-tarea__btn'>$
                </button> */}
            </form>
            
        </div>
{/* ------- Iconos Grises Hide----------- */}
        <div className='lista-tareas__contenedor-botones'>
        
        
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
        {/* Formulario de Precio */}
        
        {/* Icono-accion te permite que solo se vea el icono cuando pasa el cursor sobre la tarea */}
    </li>
  )
}
