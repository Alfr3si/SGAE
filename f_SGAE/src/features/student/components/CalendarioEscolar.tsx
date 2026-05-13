import React from 'react';

interface Evento {
  id: number | string;
  titulo: string;
  fecha: string; // Formato esperado: YYYY-MM-DD
  desc: string;
}

export default function CalendarioEscolar() {
  const eventosJson = localStorage.getItem('eventos');
  const eventos: Evento[] = eventosJson ? JSON.parse(eventosJson) : [];

  // Función para formatear la fecha de forma más visual
  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr);
    const dia = fecha.getDate() + 1; // Ajuste por zona horaria común en JS
    const mes = fecha.toLocaleString('es-MX', { month: 'short' }).replace('.', '');
    return { dia, mes };
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Próximos Eventos</h2>
          <p className="text-slate-500 text-sm">Mantente al tanto de las actividades de la institución.</p>
        </div>
        <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">
          📅
        </div>
      </div>

      {eventos.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-blue-100">
          <p className="text-slate-400 font-medium">No hay eventos programados por el momento.</p>
        </div>
      ) : (
        <div className="relative space-y-4">
          {/* Línea vertical decorativa del Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden sm:block"></div>

          {eventos.map((e, index) => {
            const { dia, mes } = formatearFecha(e.fecha);
            
            return (
              <div key={e.id} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                {/* Indicador de Fecha (Círculo lateral) */}
                <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all z-10">
                  <span className="text-xl font-black leading-none">{dia}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{mes}</span>
                </div>

                {/* Tarjeta del Evento */}
                <div className="flex-1 bg-white p-6 rounded-3xl border border-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                      {e.titulo}
                    </h3>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-bold uppercase">
                      {e.fecha}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Recordatorio Inferior */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center gap-3">
        <span className="text-xl">🔔</span>
        <p className="text-xs text-amber-800 font-medium">
          <b>Nota:</b> Los eventos pueden estar sujetos a cambios sin previo aviso por parte de la dirección de la escuela.
        </p>
      </div>
    </div>
  );
}
