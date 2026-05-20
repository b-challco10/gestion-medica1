'use client';

import './RegistrarMedico.css';

export default function RegistrarMedico() {
  return (
    <div className="registro-container">
      <h2>Registrar Médicos</h2>

      <form className="registro-formulario">
        <input type="text" placeholder="Nombre completo" />

        <input type="email" placeholder="Correo electrónico" />

        <input type="text" placeholder="Teléfono" />

        <select>
          <option>Seleccionar especialidad</option>
          <option>Cardiología</option>
          <option>Pediatría</option>
          <option>Neurología</option>
        </select>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}