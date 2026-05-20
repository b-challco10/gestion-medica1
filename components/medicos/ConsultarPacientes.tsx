'use client';

import './ConsultarPacientes.css';

const pacientes = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    edad: 32,
    enfermedad: 'Gripe',
  },
  {
    id: 2,
    nombre: 'María López',
    edad: 28,
    enfermedad: 'Diabetes',
  },
];

export default function ConsultarPacientes() {
  return (
    <div className="pacientes-container">
      <h2>Pacientes</h2>

      <table className="tabla-pacientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Enfermedad</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.enfermedad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}