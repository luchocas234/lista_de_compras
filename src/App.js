import React from 'react';
import { useState, useEffect} from 'react';
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import ListaTareas from './componentes/ListaTareas';


function App() {
 


  //Obtenemos tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [] ;
 // Establecemos el estado de las tareas 
  const [tareas, cambiarTareas] = useState(tareasGuardadas
  );


  // Guardando estado en local storage
  useEffect(()=> {

  //  localStorage nos permite almacenar en el navegador, pero tiene que ser en cadena de texto, por eso usamos JSON stringify para poder guardar todo nuestro arreglo en una cadena.

    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas]);
  //esto hace que el codigo se ejecute la primera vez y solo cuando "tareas" Cambien



  // Accedemos al localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }


  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(()=> {
      localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  },[mostrarCompletadas]);

  // Esta funcion nos permite guardar la fecha en el que se creo la tarea y se completo, mandando mediante props a los componentes
  const fechanew = () =>{
		var showdate= new Date();
		var displaytodaydate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear()+' - '+showdate.getHours()+':'+showdate.getMinutes();

		return displaytodaydate;
	}


  return (
    <div className="contenedor">
      <Header
      tareas={tareas}
       mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} fechanew={fechanew}/>
      <ListaTareas 
      fechanew={fechanew}
      tareas={tareas} 
      cambiarTareas={cambiarTareas}
      mostrarCompletadas={mostrarCompletadas} />
      <div>
        <button> borrar todas</button>
        
        <button> Completar todas</button>
       <button>Ordenar por fecha</button>
      </div>
    </div>
  );
}

export default App;
