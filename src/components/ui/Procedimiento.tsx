export default function Procedimiento() {
  const pasos = [
    "Solicita la ficha de inscripción en la oficina administrativa o descárgala de nuestro sitio web.",
    "Completa la ficha con todos los datos requeridos.",
    "Reúne todos los documentos mencionados en la sección anterior.",
    "Realiza el pago de inscripción en la institución bancaria indicada.",
    "Presenta los documentos y el comprobante de pago en la oficina administrativa.",
    "Asiste a la reunión informativa de inicio de curso (fechas por confirmar)."
  ];

  return (
    <section className="max-w-5xl mx-auto my-10 p-8 bg-white shadow-xl rounded-3xl border border-blue-100">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
        <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight">
          Pasos a seguir
        </h3>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pasos.map((paso, i) => (
          <li
            key={i}
            className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group"
          >
            {/* Círculo con el número del paso */}
            <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg group-hover:scale-110 transition-transform">
              {i + 1}
            </span>

            {/* Texto del paso */}
            <p className="text-gray-700 text-lg leading-snug font-medium">
              {paso}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="text-blue-600 font-bold">
          ¿Tienes dudas? Acude a la oficina administrativa de lunes a viernes (8:00 AM - 2:00 PM).
        </p>
      </div>
    </section>
  );
}
