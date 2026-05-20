import RegistrarMedico from '@/components/medicos/RegistrarMedico';
import RegistrarEspecialidad from '@/components/medicos/RegistrarEspecialidad';
import ConsultarPacientes from '@/components/medicos/ConsultarPacientes';

export default function GestionMedicosPage() {
  return (
    <div>
      <RegistrarMedico />
      <RegistrarEspecialidad />
      <ConsultarPacientes />
    </div>
  );
}