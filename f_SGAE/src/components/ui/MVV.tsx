export default function MVV() {
  const valores = [
    "Respeto", "Igualdad", "Inclusión", "Disciplina",
    "Tolerancia", "Honestidad", "Solidaridad", "Creatividad",
    "Democracia", "Diálogo", "Responsabilidad", "Equidad de Género"
  ];

  return (
    <article id="MVV" className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Misión */}
      <div className="flex flex-col p-8 bg-white border-t-4 border-blue-100 rounded-2xl shadow-xl hover:translate-y-2 transition-transform">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
          <span className="text-blue-600 font-bold">M</span>
        </div>
        <h2 className="text-center text-2xl font-black text-blue-900 mb-4 uppercase tracking-wider">Misión</h2>
        <p className="text-center text-gray-700 leading-relaxed italic">
          “Somos un colegiado comprometido en cada una de las áreas que forma alumnos en la construcción de su identidad personal, que valoran su entorno y se desarrollan como personas plenas...”
        </p>
      </div>

      {/* Visión */}
      <div className="flex flex-col p-8 bg-white border-t-4 border-blue-100 rounded-2xl shadow-xl hover:translate-y-2 transition-transform">
        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
          <span className="text-emerald-600 font-bold">V</span>
        </div>
        <h2 className="text-center text-2xl font-black text-emerald-900 mb-4 uppercase tracking-wider">Visión</h2>
        <p className="text-center text-gray-700 leading-relaxed italic">
          “Ser una institución esmeralda en brindar calidad en los servicios educativos, comprometida en la formación de alumnos, a fin de que logren su integración al medio social...”
        </p>
      </div>

      {/* Valores */}
      <div className="flex flex-col p-8 bg-white border-t-4 border-blue-100 rounded-2xl shadow-xl hover:translate-y-2 transition-transform">
        <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4 mx-auto">
          <span className="text-amber-600 font-bold">V</span>
        </div>
        <h2 className="text-center text-2xl font-black text-amber-900 mb-4 uppercase tracking-wider">Valores</h2>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {valores.map((valor, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-100"
            >
              {valor}
            </span>
          ))}
        </div>
      </div>

    </article>
  );
}
