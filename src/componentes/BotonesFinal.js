import React, { useEffect, useState } from 'react'

export default function BotonesFinal({tareas,cambiarTareas,fechanew,cambiarEstado}) {

const borrarTareas = () =>{
  
  cambiarEstado(true)
  

    
      
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
       {tareas.length > 0 ? <button className='header__boton' onClick={() => borrarTareas()}>Borrar todas</button>
     : <div></div>}

       
        
        {/* <button className='header__boton'>Ordenar por fecha</button> */}
      </div>
  )
}
