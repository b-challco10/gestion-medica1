'use client';
import { useState } from 'react';
import AsignarHabitacion from '@/components/habitaciones/AsignarHabitacion';
import VisualizarHabitaciones from '@/components/habitaciones/VisualizarHabitaciones';
import './recepcionista.css';
export default function RecepcionistaPage() {
  const [vista, setVista] = useState('asignar');
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Recepcionista</h2>
        <button onClick={() => setVista('asignar')}>
         🛏️ Asignar Habitación
        </button>
        <button onClick={() => setVista('habitaciones')}>
        🏥 Visualizar Habitaciones
        </button>
      </aside>
      <main className="contenido">
        {vista === 'asignar' && (
          <AsignarHabitacion />
        )}
        {vista === 'habitaciones' && (
          <VisualizarHabitaciones />
        )}
      </main>
    </div>
  );
}