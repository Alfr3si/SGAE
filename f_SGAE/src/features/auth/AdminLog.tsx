import React, { useState } from 'react';

export function AdminLog() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans">
      
      {/* SECCIÓN IZQUIERDA: Identidad Administrativa */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
        {/* Patrón de malla tecnológica de fondo */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-lg">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-indigo-600 rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.4)] border border-indigo-400/30">
            <span className="text-5xl">🖥️</span>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">
            System <br /> <span className="text-indigo-400">Administrator</span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Consola central de administración del SGAE. Acceso restringido a personal de dirección y control escolar de la 
            <span className="font-bold text-slate-200"> Lic. Adelor D. Sala.</span>
          </p>
          
          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">Servidor Activo: SGAE-PROD</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: Formulario de Alta Seguridad */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-8 bg-indigo-600 rounded-full"></div>
              <p className="text-indigo-600 font-black text-xs uppercase tracking-widest">Secure Access</p>
            </div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">Panel de Control</h1>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Campo: Usuario Admin */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Usuario Maestro (Root)</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  👤
                </span>
                <input 
                  type="text" 
                  placeholder="admin_root"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Campo: Contraseña con Token */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contraseña de Seguridad</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  🔑
                </span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 p-1"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Botón de Entrada Crítico */}
            <button 
              className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl shadow-xl shadow-slate-200 transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest text-sm border border-slate-800"
            >
              Autenticar Administrador
            </button>
          </form>

          {/* Warning Legal */}
          <div className="mt-12 p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="flex gap-3">
              <span className="text-amber-600">⚠️</span>
              <p className="text-[10px] text-amber-700 font-medium leading-relaxed uppercase">
                Uso restringido. Cada intento de acceso es monitoreado vía IP. El acceso no autorizado será sancionado según la normativa vigente.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
