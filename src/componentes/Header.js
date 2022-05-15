import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'

export default function Header({tareas,mostrarCompletadas, cambiarMostrarCompletadas}) {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  }
  //En newTareas es un array donde va a guardar las completadas, para poder contabilizarlas y así mostrar en el boton de mostrar completadas
    const newTareas= tareas.filter( (tarea)=> {
      if(tarea.completada === true){
        return tarea;}
      return;})

  
  return (
    <header className='header'>
        <h1 className='header__titulo'>Lista de Tareas</h1>
        {mostrarCompletadas ?
        <button 
        className='header__boton' 
        onClick={()=> toggleCompletadas()}
        >
        No mostrar Completadas
            <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton"/>
            
        </button>
        :
          <button 
          className='header__boton'
          onClick={() => toggleCompletadas()}
          >
          Mostrar {newTareas.length} Completadas 
              <FontAwesomeIcon icon={faEye} className="header__icono-boton"/>
              
          </button>

        }
        
        
    </header>
  )
}
