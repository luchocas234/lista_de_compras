import React from 'react'

export default function AceptarWindow({estado,cambiarEstado,confirmarBorrar}) {
  return (
    <> { estado && 
    <div className='aceptar-window'>
        <div className='aceptar-window__card'>
            <h3>¿Desea eliminar todas las Tareas?</h3>
          <div className='aceptar-window__btns'>
               <button className='header__boton' onClick={() =>{
              confirmarBorrar()
              cambiarEstado(false)
              }}>Aceptar</button>
          <button className='header__boton' onClick={()=>cambiarEstado(false)}>Cancelar</button>
          </div>
         
        </div>
      </div>}
      
      </>
    
  )
}
