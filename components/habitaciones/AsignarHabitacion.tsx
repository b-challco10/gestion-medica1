'use client';

import './AsignarHabitacion.css';

export default function AsignarHabitacion() {
  return (
    <div className="habitacion-container">
      <h2>Asignar Habitaciones</h2>

      <form className="habitacion-formulario">
        <input type="text" placeholder="Nombre del paciente" />

        <select>
          <option>Seleccionar habitación</option>
          <option>Habitación 101</option>
          <option>Habitación 102</option>
          <option>Habitación 103</option>
        </select>

        <button type="submit">Confirmar Asignación</button>
      </form>
    </div>
  );
}