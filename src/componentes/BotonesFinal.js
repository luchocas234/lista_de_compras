import React, { useEffect, useState } from 'react'

export default function BotonesFinal({tareas,cambiarTareas,fechanew}) {

const borrarTareas = () =>{
    cambiarTareas(tareas.filter( (tarea)=> {
        return;
      } ))
}



// const ordenarTareas =() =>{

//     const perras= tareas.sort((a,b) => {
//         if (a.fechaCreada < b.fechaCreada){
//             return 1;
//         }
//         if (a.fechaCreada > b.fechaCreada){
//             return -1;
//         }
//         return 0;
//     })


    
    
// }


  return (
     <div className='header'>
        <button className='header__boton' onClick={() => borrarTareas()}>Borrar todas</button>
        
        {/* <button className='header__boton'>Ordenar por fecha</button> */}
      </div>
  )
}
