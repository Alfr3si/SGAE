import logoSec from "../../assets/LogoSec.png";
import logosep from "../../assets/logosep.png";

export default function Header() {
  return (
    <header className="w-full bg-blue-700 dark:bg-slate-950 border-b border-blue-600 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo Institucional Izquierdo - Usamos shrink-0 para proteger la imagen */}
        <div className="shrink-0">
          <img 
            src={logoSec} 
            className="h-16 md:h-20 w-auto object-contain drop-shadow-md rounded-xl bg-white/10 p-1" 
            alt="Escuela Secundaria Adelor D. Sala" 
          />
        </div>

        {/* Texto Central con jerarquía - Usamos flex-1 para que tome el espacio sobrante */}
        <div className="text-center flex-1 px-4">
          <h1 className="text-white font-black text-xl md:text-3xl lg:text-4xl leading-tight tracking-tight uppercase">
            Escuela Secundaria Estatal 
            <span className="block text-blue-200 dark:text-blue-400">
              Lic. Adelor D. Sala
            </span>
          </h1>
          <p className="hidden md:block text-blue-100 text-xs font-medium tracking-[0.2em] mt-1 opacity-80 uppercase">
            Clave: 27EES00XXY • Teapa, Tabasco
          </p>
        </div>

        {/* Logo SEP Derecho - También con shrink-0 */}
        <div className="hidden sm:block shrink-0">
          <img 
            src={logosep} 
            className="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90" 
            alt="Secretaría de Educación" 
          />
        </div>

      </div>
    </header>
  );
}
