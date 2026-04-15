import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/Login/AlumnosLog", label: "SGAE Alumnos" },
    { to: "/Login/MaestrosLog", label: "SGAE Maestros" },
    { to: "/Login/AdminLog", label: "SGAE Admin" },
  ];

  return (
    <nav className="bg-blue-600 dark:bg-slate-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo o Título del Sistema */}
          <div className="shrink-0">
            <NavLink to="/" className="text-white font-black text-xl tracking-tighter">
              SGAE<span className="text-blue-200">.</span>
            </NavLink>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      isActive 
                        ? "bg-white text-blue-600 shadow-md" 
                        : "text-white hover:bg-blue-700 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Botón Hamburguesa (Móvil) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              {/* Icono animado dinámico */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 dark:bg-slate-800">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className={({ isActive }) =>
                `block px-3 py-4 rounded-md text-base font-medium ${
                  isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
