'use client';
import { useState } from 'react';
import RegistrarMedico from '@/components/medicos/RegistrarMedico';
import RegistrarEspecialidad from '@/components/medicos/RegistrarEspecialidad';
import VisualizarHabitaciones from '@/components/habitaciones/VisualizarHabitaciones';
import './admin.css';
export default function AdministradorPage() {
  const [vista, setVista] = useState('medico');
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Administrador</h2>
        <button onClick={() => setVista('medico')}>
         👨‍⚕️ Registrar Médico
        </button>
        <button onClick={() => setVista('especialidad')}>
          🩺 Registrar Especialidad
        </button>
        <button onClick={() => setVista('habitaciones')}>
          🛏️ Visualizar Habitaciones
        </button>
      </aside>
      <main className="contenido">
        {vista === 'medico' && <RegistrarMedico />}
        {vista === 'especialidad' && (
          <RegistrarEspecialidad />
        )}
        {vista === 'habitaciones' && (
          <VisualizarHabitaciones />
        )}
      </main>
    </div>
  );
}