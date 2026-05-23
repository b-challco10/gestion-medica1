'use client';

import { useState } from 'react';
import './ConsultarPacientes.css';

type Paciente = {
  id: number;
  nombre: string;
  ci: string;
  edad: number;
  sexo: string;
  diagnostico: string;
  estado: string;
  habitacion: string;
  medico: string;
  ingreso: string;
};

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    ci: '1234567',
    edad: 32,
    sexo: 'Masculino',
    diagnostico: 'Gripe',
    estado: 'Estable',
    habitacion: '101',
    medico: 'Dr. Carlos Rojas',
    ingreso: '20/05/2026',
  },
  {
    id: 2,
    nombre: 'María López',
    ci: '7654321',
    edad: 28,
    sexo: 'Femenino',
    diagnostico: 'Diabetes',
    estado: 'Internado',
    habitacion: '102',
    medico: 'Dra. Ana Flores',
    ingreso: '18/05/2026',
  },
];

export default function ConsultarPacientes() {

  const [pacienteSeleccionado, setPacienteSeleccionado] =
    useState<Paciente | null>(null);

  return (
    <div className="pacientes-container">

      <h2>Pacientes</h2>

      <table className="tabla-pacientes">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Diagnóstico</th>
            <th>Detalles</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>

              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.diagnostico}</td>

              <td>
                <button
                  className="btn-detalles"
                  onClick={() => setPacienteSeleccionado(paciente)}
                >
                  Ver detalles
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {pacienteSeleccionado && (

        <div className="detalle-paciente">

          <h3>Información del paciente</h3>

          <p><strong>Paciente:</strong> {pacienteSeleccionado.nombre}</p>

          <p><strong>CI:</strong> {pacienteSeleccionado.ci}</p>

          <p><strong>Edad:</strong> {pacienteSeleccionado.edad}</p>

          <p><strong>Sexo:</strong> {pacienteSeleccionado.sexo}</p>

          <p><strong>Diagnóstico:</strong> {pacienteSeleccionado.diagnostico}</p>

          <p><strong>Estado:</strong> {pacienteSeleccionado.estado}</p>

          <p><strong>Habitación:</strong> {pacienteSeleccionado.habitacion}</p>

          <p><strong>Médico responsable:</strong> {pacienteSeleccionado.medico}</p>

          <p><strong>Fecha de ingreso:</strong> {pacienteSeleccionado.ingreso}</p>

        </div>

      )}

    </div>
  );
}