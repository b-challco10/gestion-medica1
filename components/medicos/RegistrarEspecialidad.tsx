'use client';

import './RegistrarEspecialidad.css';

export default function RegistrarEspecialidad() {
  return (
    <div className="especialidad-container">
      <h2>Registrar Especialidades</h2>

      <form className="especialidad-formulario">
        <input type="text" placeholder="Nombre de la especialidad" />

        <textarea placeholder="Descripción"></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}