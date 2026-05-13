import Header from '../components/layout/Header'
import BarNav from '../components/layout/BarNav'
import Carousel from '../components/ui/Carousel'
import MVV from '../components/ui/MVV'
import Contacto from '../components/ui/Contacto'
import Inscripcion from '../components/ui/Inscripcion'
import Procedimiento from '../components/ui/Procedimiento'

import img1 from "../assets/escuela.png";
import img3 from "../assets/aula1.png";
import img4 from "../assets/cancha.png";
import img5 from "../assets/cancha2.png";
import img6 from "../assets/auditorio.png"

export const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <BarNav />
      
      {/* Contenedor del Carousel con Tailwind v4 */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <section className="flex justify-center items-center h-[50vh] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
          <Carousel images={[img1, img3, img4, img5, img6]} interval={4000} />
        </section>

        <section className="mt-12">
          <h2 className='text-blue-900 font-extrabold text-4xl text-center mb-8'>
            Acerca de la escuela
          </h2>
          <MVV />
        </section>

        <section className="space-y-20 py-10">
          <Inscripcion />
          <Procedimiento />
          <Contacto />
        </section>
      </main>
    </div>
  )
}
