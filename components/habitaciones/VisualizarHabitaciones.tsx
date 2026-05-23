'use client';

import './VisualizarHabitaciones.css';

const habitaciones = [
  {
    numero: 101,
    estado: 'Disponible',
    tipo: 'Individual',
    piso: 1,
    capacidad: 1
  },
  {
    numero: 102,
    estado: 'Ocupada',
    tipo: 'Doble',
    piso: 2,
    capacidad: 2
  },
  {
    numero: 103,
    estado: 'Disponible',
    tipo: 'Suite',
    piso: 3,
    capacidad: 4
  },
];

export default function VisualizarHabitaciones() {
  return (
    <div className="visualizar-container">
      <h2>HABITACIONES</h2>

      <table className="tabla-habitaciones">
        <thead>
          <tr>
            <th>Número</th>
            <th>Estado</th>
            <th>Tipo</th>
            <th>Piso</th>
            <th>Capacidad</th>
          </tr>
        </thead>

        <tbody>
          {habitaciones.map((habitacion, index) => (
            <tr key={index}>
              <td>{habitacion.numero}</td>
              <td>{habitacion.estado}</td>
              <td>{habitacion.tipo}</td>
              <td>{habitacion.piso}</td>
              <td>{habitacion.capacidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}