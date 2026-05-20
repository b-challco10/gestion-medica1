'use client';

import './VisualizarHabitaciones.css';

const habitaciones = [
  {
    numero: 101,
    estado: 'Disponible',
  },
  {
    numero: 102,
    estado: 'Ocupada',
  },
  {
    numero: 103,
    estado: 'Disponible',
  },
];

export default function VisualizarHabitaciones() {
  return (
    <div className="visualizar-container">
      <h2>Habitaciones</h2>

      <table className="tabla-habitaciones">
        <thead>
          <tr>
            <th>Número</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {habitaciones.map((habitacion, index) => (
            <tr key={index}>
              <td>{habitacion.numero}</td>
              <td>{habitacion.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}