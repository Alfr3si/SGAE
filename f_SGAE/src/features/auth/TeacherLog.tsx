import React, { useState } from 'react';

export function TeacherLog() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans">
      
      {/* SECCIÓN IZQUIERDA: Identidad para Docentes */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-800 relative items-center justify-center p-12 overflow-hidden">
        {/* Decoración de fondo orgánica */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-lg">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
            <span className="text-5xl">👨‍🏫</span>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">
            Panel del <br /> <span className="text-emerald-200">Docente</span>
          </h2>
          <p className="text-emerald-100 text-lg font-light leading-relaxed">
            Gestione sus grupos, capture calificaciones y realice el seguimiento pedagógico de la Secundaria 
            <span className="font-bold"> Lic. Adelor D. Sala.</span>
          </p>
          
          <div className="mt-12 flex justify-center items-center gap-4">
             <div className="h-[1px] w-12 bg-emerald-400/30"></div>
             <span className="text-emerald-300 text-xs font-black uppercase tracking-[0.3em]">Acceso Seguro</span>
             <div className="h-[1px] w-12 bg-emerald-400/30"></div>
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Bienvenido, Profesor</h1>
            <p className="text-slate-500 font-medium">Ingrese sus credenciales de empleado.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Campo: Usuario/RFC */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">ID de Empleado / RFC</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                  👤
                </span>
                <input 
                  type="text" 
                  placeholder="Ej. ABCD800101H"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-emerald-600/5 focus:border-emerald-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Campo: Contraseña */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contraseña</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                  🔒
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-emerald-600/5 focus:border-emerald-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 p-1 transition-colors"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex items-center justify-between px-1">
              <a href="#" className="text-sm text-emerald-700 font-bold hover:text-emerald-800 transition-colors">¿Problemas con su cuenta?</a>
            </div>

            {/* Botón de Entrada */}
            <button 
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-100 transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest text-sm"
            >
              Iniciar Sesión Docente
            </button>
          </form>

          {/* Footer Informativo */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
              SGAE • Sistema de Gestión Académica
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
