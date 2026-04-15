export default function Contacto() {
  const info = [
    { label: "Teléfono", valor: "(932) 123-4567", sub: "Atención de 8:00 a 14:00 hrs", color: "bg-green-100 text-green-700" },
    { label: "Email", valor: "contacto@adelordsala.edu.mx", sub: "Respuesta en menos de 24hrs", color: "bg-blue-100 text-blue-700" },
    { label: "Ubicación", valor: "Av. Adelor D. Sala s/n", sub: "Teapa, Tabasco. CP 86800", color: "bg-red-100 text-red-700" },
  ];

  return (
    <section className="max-w-5xl mx-auto my-12 p-8 bg-white shadow-xl rounded-3xl border border-gray-100">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight">Contacto Directo</h3>
        <p className="text-gray-500 mt-2">Estamos para resolver todas tus dudas sobre el ingreso al plantel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl border border-gray-50 bg-gray-50/50 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 font-bold text-xl`}>
              {item.label[0]}
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
            <p className="text-lg font-bold text-blue-900 break-words">{item.valor}</p>
            <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Botón de acción rápida (Opcional) */}
      <div className="mt-10 text-center">
        <a 
          href="https://www.google.com/maps/place/Escuela+Secundaria+Estatal+Lic.+Adelor+D.+Sala/@17.5484838,-92.9495777,17z/data=!3m1!4b1!4m6!3m5!1s0x85edb0b24378b713:0x83755cc4f2655a8e!8m2!3d17.5484838!4d-92.9495777!16s%2Fg%2F1tdy9f2x?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3Dhttps://maps.google.com" 
          target="_blank" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-200"
        >
          Ver ubicación en Google Maps
        </a>
      </div>
    </section>
  );
}
