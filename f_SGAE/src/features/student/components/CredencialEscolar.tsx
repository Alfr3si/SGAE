import { useEffect, useState } from 'react';

interface CredentialData {
  alum_nombre: string;
  alum_apepa: string;
  alum_apema: string;
  alum_estatus: string;
  alum_conducta: string;
  matricula: string;
  grupo_grado: string;
  grupo_letra: string;
}

interface Props {
  userId: string;
}

export default function CredencialEscolar({ userId }: Props) {
  const [datos, setDatos] = useState<CredentialData | null>(null);
  const [loading, setLoading] = useState(true);

  // Dentro de CredencialEscolar.tsx, cambia la URL del fetch:

  useEffect(() => {
    const fetchCredential = async () => {
      try {
        // USAMOS EL QUE YA FUNCIONA
        const response = await fetch(`http://localhost/SGAE/src/api/student/get_profile.php?id=${userId}`);
        const result = await response.json();

        console.log("Datos recibidos para credencial:", result); // DEBUG

        if (result.success) {
          setDatos(result.data);
        } else {
          console.error("Error en API:", result.message);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchCredential();
  }, [userId]);

  if (loading) return <div className="p-20 text-center font-bold text-slate-400 animate-pulse">Generando credencial digital...</div>;
  if (!datos) return <div className="p-20 text-center text-red-500 font-bold">No se pudo generar la credencial.</div>;

  const invalida = datos.alum_estatus === 'Expulsado' || datos.alum_conducta === 'Mala';

  return (
    <div className="flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-black text-slate-800">Credencial Digital</h2>
        <p className="text-slate-500 text-sm">Identificación oficial del estudiante</p>
      </div>

      {/* CONTENEDOR DE LA CREDENCIAL */}
      <div className={`relative w-80 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 ${invalida ? 'border-red-500 grayscale' : 'border-white'} transition-all duration-500`}>

        {/* ENCABEZADO INSTITUCIONAL */}
        <div className="bg-blue-700 p-4 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10"></div>
          <h3 className="text-white font-black text-xs uppercase tracking-[0.2em]">Escuela Secundaria Estatal</h3>
          <p className="text-blue-100 text-[10px] font-bold uppercase">Lic. Adelor D. Sala</p>
        </div>

        {/* FOTO Y DATOS PRINCIPALES */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-slate-100 rounded-2xl border-4 border-slate-50 shadow-inner flex items-center justify-center overflow-hidden mb-4">
            <span className="text-5xl opacity-20">👤</span>
          </div>

          <div className="text-center space-y-1 mb-6">
            <h4 className="text-xl font-black text-slate-800 leading-tight">
              {datos.alum_nombre} <br />
              <span className="text-blue-600">{datos.alum_apepa} {datos.alum_apema}</span>
            </h4>
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">{datos.matricula}</p>
          </div>

          {/* GRID DE INFORMACIÓN ACADÉMICA */}
          <div className="w-full grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <InfoItem label="Grado" valor={`${datos.grupo_grado}°`} />
            <InfoItem label="Grupo" valor={datos.grupo_letra} />
            <InfoItem label="Estatus" valor={datos.alum_estatus} highlight={datos.alum_estatus === 'Regular'} />
            <InfoItem label="Conducta" valor={datos.alum_conducta} />
          </div>

          {/* ÁREA DE FIRMAS */}
          <div className="w-full mt-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="h-10 w-full border-b border-slate-300"></div>
              <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">Firma Alumno</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-full border-b border-slate-300"></div>
              <span className="text-[8px] font-bold text-slate-400 uppercase mt-1">Firma Tutor</span>
            </div>
          </div>
        </div>

        {/* CÓDIGO DE BARRAS DECORATIVO */}
        <div className="bg-slate-50 py-3 flex flex-col items-center border-t border-slate-100">
          <div className="flex gap-1 mb-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`h-6 bg-slate-800 ${i % 3 === 0 ? 'w-1' : 'w-0.5'}`}></div>
            ))}
          </div>
          <span className="text-[9px] font-mono text-slate-500 tracking-widest">SGAE-SYSTEM-2026</span>
        </div>

        {/* OVERLAY DE INVALIDEZ */}
        {invalida && (
          <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center rotate-12 pointer-events-none">
            <div className="border-4 border-red-600 px-4 py-2 text-red-600 font-black text-2xl uppercase">
              No Válida
            </div>
          </div>
        )}
      </div>

      {/* BOTÓN DE ACCIÓN */}
      <div className="mt-8">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition-all shadow-lg active:scale-95"
        >
          <span>🖨️</span> Imprimir Credencial
        </button>
      </div>

      <p className="mt-4 text-[10px] text-slate-400 max-w-xs text-center uppercase font-bold tracking-tighter">
        Esta credencial es personal e intransferible. Válida para el ciclo escolar 2025-2026.
      </p>
    </div>
  );
}

function InfoItem({ label, valor, highlight = false }: { label: string, valor: string, highlight?: boolean }) {
  return (
    <div>
      <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">{label}</p>
      <p className={`text-xs font-bold ${highlight ? 'text-green-600' : 'text-slate-700'}`}>{valor || "—"}</p>
    </div>
  );
}
