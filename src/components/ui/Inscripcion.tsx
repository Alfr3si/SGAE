import acta from '../../assets/documentos/actanacimiento.jpg';
import curp from '../../assets/documentos/curp.webp';
import certificado from '../../assets/documentos/certificadoPrimaria.jpg';
import credencial from '../../assets/documentos/credencial.png';
import domicilio from '../../assets/documentos/domicilio.webp';
import foto from '../../assets/documentos/fotoInfantil.webp';

export default function InfoInscripcion() {
  const docs = [
    { n: "Acta de Nacimiento (original y copia)", img: acta },
    { n: "CURP (copia)", img: curp },
    { n: "Certificado de Primaria (original y copia)", img: certificado },
    { n: "Identificación oficial del tutor (copia)", img: credencial },
    { n: "4 fotografías tamaño infantil", img: foto },
    { n: "Comprobante de domicilio (copia)", img: domicilio },
  ];

  return (
    <section className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-3xl border border-blue-100">
      <h2 className="text-4xl font-black text-center text-blue-900 mb-12 uppercase">
        Requisitos de Inscripción
      </h2>

      <ul className="space-y-8">
        {docs.map((doc, i) => (
          <li 
            key={i} 
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 border-b border-gray-100 last:border-0"
          >
            {/* Texto: le quitamos el div y usamos flex-1 directamente */}
            <p className="flex-1 text-xl md:text-2xl font-bold text-gray-700">
              <span className="text-blue-600 mr-4">{i + 1}.</span>
              {doc.n}
            </p>

            {/* Imagen: Con tamaño fijo para que no rompa el diseño */}
            <img 
              src={doc.img} 
              alt={doc.n} 
              className="w-full md:w-72 h-44 object-cover rounded-2xl shadow-md border-2 border-blue-100 hover:scale-105 transition-transform" 
            />
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-gray-400 italic text-sm">
        * Presentar documentación completa en sobre manila.
      </p>
    </section>
  );
}
