import React from 'react';

interface MateriaCalif {
  materia: string;
  T1: number | string;
  T2: number | string;
  T3: number | string;
  T4: number | string;
  prom: number | string;
}

export default function Calificaciones() {
  const califsJson = localStorage.getItem('calificaciones');
  const califs: MateriaCalif[] = califsJson ? JSON.parse(califsJson) : [];
  const promedioGeneral = localStorage.getItem('promedio') || '—';

  // Función para determinar el color según la calificación
  const getColorCalificacion = (calif: any) => {
    const num = parseFloat(calif);
    if (isNaN(num)) return 'text-slate-400';
    if (num >= 9) return 'text-green-600 font-bold';
    if (num >= 7) return 'text-blue-600 font-bold';
    return 'text-red-600 font-bold';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Encabezado de la Sección */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Boleta de Calificaciones</h2>
          <p className="text-slate-500 text-sm">Ciclo Escolar Actual • Desglose por Trimestres</p>
        </div>
        
        {/* Widget de Promedio General */}
        <div className="bg-white px-6 py-3 rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-100 flex items-center gap-3">
          <span className="text-blue-600 text-2xl">🎯</span>
          <div>
            <p className="text-[10px] uppercase font-black text-slate-400 leading-none">Promedio General</p>
            <p className="text-2xl font-black text-blue-700">{promedioGeneral}</p>
          </div>
        </div>
      </div>

      {/* Tabla de Calificaciones Estilizada */}
      <div className="bg-white rounded-3xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                {['Materia', 'Trim 1', 'Trim 2', 'Trim 3', 'Trim 4', 'Final'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-widest"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-50">
              {califs.length > 0 ? (
                califs.map((c, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                        {c.materia}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${getColorCalificacion(c.T1)}`}>{c.T1}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${getColorCalificacion(c.T2)}`}>{c.T2}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${getColorCalificacion(c.T3)}`}>{c.T3}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${getColorCalificacion(c.T4)}`}>{c.T4}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-black border border-blue-100">
                        {c.prom}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 italic">
                    No hay calificaciones registradas en este periodo.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leyenda de Colores */}
      <div className="flex flex-wrap gap-4 px-2">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div> Excelente (9-10)
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Aprobado (7-8)
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div> Riesgo (6 o menos)
        </div>
      </div>
    </div>
  );
}
