import React, { useEffect, useState } from 'react';
import Cita from './components/Cita';
import Formulario from "./components/Formulario";


function App() {

  //Citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Array de citas

  const [citas, setCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia

  useEffect( ()=>
  {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[citas,citasIniciales]); //La parte del corchete indica las dependencias

  //Funcion que tome la citas actuales y agregue la nueva

  const crearCita = (ncita) => {
    setCitas([...citas, ncita])
  }

  //Funcion que elimina una cita por su ID

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
  }

  //Mensaje Condicional
  const titulo = citas.length === 0 ? 'no hay citas' : 'Administra tus citas';

  /* LA FUNCION MAP FUNCIONA COMO UN FOREACH */



  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(c => (
              <Cita
                key={c.id}
                citas={c}
                eliminarCita={eliminarCita}
              />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
