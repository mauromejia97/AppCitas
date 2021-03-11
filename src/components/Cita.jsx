import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({ citas, eliminarCita }) => {

    const { mascota, propietario, fecha, hora, sintomas } = citas;

    return (
        <div className="cita">
            <p>Mascota : <span>{mascota}</span></p>
            <p>Dueño : <span>{propietario}</span></p>
            <p>Fecha : <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas : <span>{sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(citas.id)}
            >Eliminar &times;</button>
        </div>
    )
}
Cita.propType = {
    citas: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
