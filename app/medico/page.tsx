'use client';
import { useState } from 'react';
import ConsultarPacientes from '@/components/medicos/ConsultarPacientes';
import './medico.css';
export default function MedicoPage() {
  const [vista, setVista] = useState('pacientes');
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Médico</h2>
        <button onClick={() => setVista('pacientes')}>
         📋 Consultar Pacientes
        </button>
      </aside>
      <main className="contenido">
        {vista === 'pacientes' && (
          <ConsultarPacientes />
        )}
      </main>
    </div>
  );
}