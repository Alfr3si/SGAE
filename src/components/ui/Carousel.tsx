import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Usamos useCallback para que la función sea estable y no reinicie el timer innecesariamente
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Cambio automático inteligente
  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  return (
    <div className="relative w-full group overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
      {/* Contenedor de Imágenes */}
      <div className="relative h-64 md:h-96 w-full">
        {images.map((img: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out transform ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-110 pointer-events-none"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover" // "cover" suele verse mejor en landing pages
              alt={`Vista de la escuela ${index + 1}`}
            />
            {/* Gradiente sutil para que los indicadores se vean mejor */}
            <div className="absolute inset-0 bg-linear-90 from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Botones de Navegación (Solo visibles al pasar el mouse/hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
      >
        <span className="sr-only">Anterior</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
      >
        <span className="sr-only">Siguiente</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-500 rounded-full ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
