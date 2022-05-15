import React from 'react'
import Tarea from './Tarea'

// Dentro de este componente vamos a agregar las funciones que nos permite poder modificar o borrar nuestras tareas


function ListaTareas({tareas, cambiarTareas, mostrarCompletadas, fechanew}) {

const toggleCompletada= (id)=>{
  
  cambiarTareas(tareas.map( (tarea)=> {
    if(tarea.id === id){
      return {...tarea, completada: !tarea.completada,
      fechaCompletada:fechanew()
      }
    }
    return tarea;
  } ))
}

const editarTarea= (id, nuevoTexto)=>{
  
  cambiarTareas(tareas.map( (tarea)=> {
    if(tarea.id === id){
      return {...tarea, texto: nuevoTexto}
    }
    return tarea;
  } ))
}

const borrarTarea= (id )=>{
  //el metodo filter devuelve todos los elementos excepto la tarea la que estamos buscando.
  cambiarTareas(tareas.filter( (tarea)=> {
    if(tarea.id !== id){
      return tarea;}
    return;
  } ))
}



  return (
    <ul className='lista-tareas'> 
      {
        // Acá checkeamos que me deje mostrar la tarea solo si la cantidad de elementos es mayor a 0
      tareas.length > 0 ?  tareas.map((tarea) =>{
        if(mostrarCompletadas){
          return <Tarea 
                  key={tarea.id} 
                  tarea={tarea}
                  editarTarea={editarTarea} // le pasamos funcion al componente
                  toggleCompletada={toggleCompletada}//acá le pasamos la funciona al componente tarea
                  borrarTarea={borrarTarea}/>
        }
        else if(!tarea.completada){
          return <Tarea 
                  key={tarea.id} 
                  tarea={tarea}
                  editarTarea={editarTarea} // le pasamos funcion al componente
                  toggleCompletada={toggleCompletada}//acá le pasamos la funciona al componente tarea
                  borrarTarea={borrarTarea}/>

        }
        return;
       
        

        // Retorna un componenten Tarea con las props de "tarea" que vienen del state de App.js
      })
      : <div className='lista-tareas__mensaje'> -- No hay tareas Agregadas -- </div> 
      // Si no es mayor a 0 muestra este mensaje de arriba.
    }
    </ul>
  )
}

export default ListaTareas