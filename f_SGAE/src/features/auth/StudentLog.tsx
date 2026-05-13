import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function StudentLog() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ESTADOS PARA EL FORMULARIO
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost/SGAE/src/api/auth/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          use_usuario: usuario,
          use_password: password
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("tipo_user", data.user.rol);
        localStorage.setItem("nombre", data.user.nombre);
        localStorage.setItem("use_id", data.user.use_id.toString());
        navigate('/students');
      } else {
        setError(data.message || 'Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans">
      
      {/* SECCIÓN IZQUIERDA: Identidad Institucional */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-lg">
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
            <span className="text-5xl">🏛️</span>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">
            Portal Académico <br /> <span className="text-blue-200">SGAE</span>
          </h2>
          <p className="text-blue-100 text-lg font-light leading-relaxed">
            Bienvenido al Sistema Gestor Académico Escolar de la Secundaria Estatal 
            <span className="font-bold"> Lic. Adelor D. Sala.</span>
          </p>
        </div>
      </div>

      {/* SECCIÓN DERECHA: Formulario de Acceso */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          
          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Iniciar Sesión</h1>
            <p className="text-slate-500 font-medium">Acceso exclusivo para alumnos registrados.</p>
          </div>

          {/* 1. MOSTRAR ERROR SI EXISTE */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-xl animate-pulse">
              ⚠️ {error}
            </div>
          )}

          {/* 2. CONECTAR EL ONSUBMIT A HANDLELOGIN */}
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Campo: Matrícula */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Matrícula</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">👤</span>
                {/* 3. VINCULAR INPUT MATRÍCULA */}
                <input 
                  type="text" 
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="Ej. 27EES0001Z"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* Campo: Contraseña */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contraseña</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">🔑</span>
                {/* 4. VINCULAR INPUT CONTRASEÑA */}
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all text-slate-800 font-semibold shadow-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* 5. BOTÓN CON ESTADO CARGANDO */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} text-white font-black py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest text-sm`}
            >
              {loading ? 'Validando...' : 'Entrar al Portal'}
            </button>
          </form>

          {/* Soporte */}
          <div className="mt-12 p-4 bg-slate-100 rounded-2xl flex items-center gap-4 border border-slate-200/50">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">🛠️</div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">¿Problemas para entrar?</p>
              <p className="text-xs text-slate-600 font-medium">Contacta al área de control escolar.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
