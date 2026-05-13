import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import ResumenAcademico from '../features/student/components/ResumenAcademico';
import Calificaciones from '../features/student/components/Calificaciones';
import CredencialEscolar from '../features/student/components/CredencialEscolar';
import CalendarioEscolar from '../features/student/components/CalendarioEscolar';

// Definimos los items fuera para que sean constantes y no se re-creen en cada render
const menuItems = [
  { id: 'resumen', label: 'Inicio', icon: '🏠' },
  { id: 'calificaciones', label: 'Calificaciones', icon: '📊' },
  { id: 'credencial', label: 'Mi Credencial', icon: '🪪' },
  { id: 'calendario', label: 'Calendario', icon: '📅' },
];

export function StudentsPag() {
  const navigate = useNavigate();
  const [opcionActiva, setOpcionActiva] = useState('resumen');
  const [nombreAlumno, setNombreAlumno] = useState("Alumno");
  
  const userId = localStorage.getItem("use_id") || "";

  useEffect(() => {
    const tipo = localStorage.getItem("tipo_user");
    const nombre = localStorage.getItem("nombre");
    
    if (tipo !== "alumno") {
      navigate("/login/studentlog", {
        state: { message: "Por favor, inicia sesión primero." },
      });
    }
    if (nombre) setNombreAlumno(nombre);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const renderContenido = () => {
    switch (opcionActiva) {
      case 'resumen': return <ResumenAcademico userId={userId} />;
      case 'calificaciones': return <Calificaciones />;
      case 'credencial': return <CredencialEscolar userId={userId} />;
      case 'calendario': return <CalendarioEscolar />;
      default: return <ResumenAcademico userId={userId} />;
    }
  };

  // --- AQUÍ ESTABA EL ERROR: No cierres la función antes del return ---

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
              <span className="text-white text-xl">🎓</span>
            </div>
            <span className="text-xl font-black text-slate-800 tracking-tighter">SGAE Portal</span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setOpcionActiva(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${
                  opcionActiva === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              {nombreAlumno.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-black text-slate-800 truncate">{nombreAlumno}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Estudiante</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-red-500 font-black text-xs hover:bg-red-50 transition-colors uppercase tracking-widest"
          >
            <span>🚪</span> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
              {menuItems.find(i => i.id === opcionActiva)?.label}
            </h2>
            <p className="text-slate-400 text-sm font-medium">Panel Académico del Estudiante</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Secundaria Estatal</p>
                <p className="text-sm font-bold text-slate-700 italic">Lic. Adelor D. Sala</p>
             </div>
          </div>
        </header>

        <section className="p-10 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            {renderContenido()}
          </div>
        </section>

        <footer className="mt-auto p-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2026 Sistema Gestor Académico Escolar • Todos los derechos reservados
        </footer>
      </main>
    </div>
  );
} // <--- ESTA ES LA LLAVE QUE CIERRA LA FUNCIÓN PRINCIPAL
