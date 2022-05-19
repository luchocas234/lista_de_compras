import React, { useState } from 'react'

export default function BotonesFinal({tareas,cambiarTareas,fechanew,cambiarEstado,sumaPrecio}) {



const borrarTareas = () =>{
  
  cambiarEstado(true)
      
    }
// const sumar = () => {
  const lala= tareas.filter( (tarea)=> {
      if(tarea.completada === true){
        return tarea.precio}
        return;})

//         cambiarSumaPrecio()
// }

// const sumall = fruits.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
// console.log(sumall);
  
    // const sumaTotal= tareas.filter( (tarea)=> {
    //   if(tarea.completada === true){
    //     return tarea.precio}
    //   return;})



 
    



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
    
     <p>Total $: {sumaPrecio}</p>

       
        
        {/* <button className='header__boton'>Ordenar por fecha</button> */}
      </div>
  )
}
