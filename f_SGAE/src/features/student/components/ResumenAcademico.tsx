import { useEffect, useState } from 'react';

interface StudentDat {
  matricula: string;
  alum_nombre: string;
  alum_apepa: string;
  alum_apema: string;
  alum_curp: string;
  alum_promedio: string;
  alum_estatus: string;
  alum_conducta: string;
  alum_turno: string;
  grupo_grado: string;
  grupo_letra: string;
}

interface Props {
  userId: string;
}

export default function ResumenAcademico({ userId }: Props) {
  const [datos, setDatos] = useState<StudentDat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost/SGAE/src/api/student/get_profile.php?id=${userId}`);
        const result = await response.json();
        if (result.success) {
          setDatos(result.data);
        } else {
          // Si el servidor responde success: false, detenemos el loading para mostrar el error
          setDatos(null);
          console.warn("El backend dice:", result.message);
        }
      } catch (error) {
        console.error("Error al obtener perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchProfile();
  }, [userId]);

  if (loading) return <div className="p-10 text-center font-bold text-slate-400 animate-pulse">Cargando expediente...</div>;
  if (!datos) return <div className="p-10 text-center text-red-500">Error al cargar los datos.</div>;

  return (
    <main className="flex-1 p-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">
          Bienvenido, {datos.alum_nombre}
        </h2>
        <p className="text-slate-500 font-medium">Resumen general de tu situación académica.</p>
      </div>

      <div className="rounded-3xl shadow-2xl shadow-blue-900/10 overflow-hidden max-w-4xl border border-slate-100 bg-white">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-6 flex justify-between items-center">
          <div>
            <p className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Matrícula Escolar</p>
            <p className="text-2xl font-mono font-bold tracking-widest">{datos.matricula}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
            <span className="text-3xl">🛡️</span>
          </div>
        </div>

        <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Dato label="Nombre" valor={datos.alum_nombre} />
          <Dato label="Apellido Paterno" valor={datos.alum_apepa} />
          <Dato label="Apellido Materno" valor={datos.alum_apema} />
          <Dato label="CURP" valor={datos.alum_curp} />
          <Dato label="Promedio" valor={datos.alum_promedio} destacado />
          <Dato label="Estatus" valor={datos.alum_estatus} />
          <Dato label="Conducta" valor={datos.alum_conducta} />
          <Dato label="Turno" valor={datos.alum_turno} />
          <Dato label="Grado y Grupo" valor={`${datos.grupo_grado}° "${datos.grupo_letra}"`} />
        </div>
      </div>
    </main>
  );
}

function Dato({ label, valor, destacado = false }: { label: string, valor: string, destacado?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 transition-all ${destacado ? 'bg-blue-50 border border-blue-100' : 'bg-slate-50 border border-slate-100'}`}>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`font-bold ${destacado ? 'text-blue-700 text-xl' : 'text-slate-700 text-base'}`}>
        {valor || "—"}
      </p>
    </div>
  );
}
