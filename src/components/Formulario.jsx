import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

    //Crear State de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }); //es un objeto

    const [error, setError] = useState(false) // es un booleano

    //funcion que se ejecuta cada vez que el usuario escribe en un imput -->
    // <-- para setear los valores de los componentes -- notar que cada propiedad del objeto coincide con el name del input --

    const actualizarState = (e) => {
        actualizarCita({
            ...cita, [e.target.name]: e.target.value
        });
    }

    //Extraer los valores desarmando el elemento cita

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario envia el formulario

    const submitCita = (e) => {
        e.preventDefault(); //evento del submit

        //Validaciones

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true); /* Siempre que hay un error va el return para que no siga ejecutando codigo */
            return;
        }

        // Para eliminar el mensaje de error por si lo mandaron vacio y despues lo completaron, sigue estando el mensaje despues de mandarlo completo
        setError(false)

        //Asignar un ID
        cita.id = uuidv4(); // Se instala una libreria que genera ID's -- npm i uuid -- // se importa de la siguiente forma --- import {v4 as uuidv4} from 'uuid' --- y se ejecuta como -- uuidv4() --

        //Crear la cita

        crearCita(cita)

        //Reiniciar Form

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }) // De esta forma se reinicia el form y queda todo en blanco -- notar que pasa esto por que en el value la mande la propiedad que ahora es un string vacio 
    }

    return (<>

        <h2> Crear Cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null} {/* Si es true devuelve "alerta error" si es False no hace nada por eso el null*/}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño"
                onChange={actualizarState}
                value={propietario}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />
            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}>

            </textarea>
            <button
                type="submit"
                className="u-full-width button-primary">Agregar Cita</button>
        </form>
    </>
    )
}

Formulario.propType = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario
