import { Card, Carousel } from "flowbite-react";
import React, { useState  } from 'react';
import Hero from "../../layouts/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faGuitar, faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from "../../layouts/ProjectCard";

const Services = () => {
const [selectedId, setSelectedId] = useState(null);

  const specs = [
  { label: "Tipo", value: "Guitarra acústica" },
  { label: "Cuerdas", value: "6" },
  { label: "Madera", value: "Caoba" },
  { label: "Marca", value: "Yamaha" },
];

  // 2. Arreglo con la información y descripciones breves de tus servicios
  const servicios = [
    {
      id: 1,
      titulo: " Instrumentos",
      descripcion: `Si buscas instrumentos de calidad, en nuestra tienda encontrarás una amplia variedad de opciones para satisfacer tus necesidades musicales.
                                Desde guitarras y bajos hasta teclados y baterías, ofrecemos instrumentos de marcas reconocidas y de alta calidad para músicos de todos los niveles.`,
      icon: faGuitar
    },
    {
      id: 2,
      titulo: " Accesorios",
      descripcion: `Si buscas accesorios de calidad, en nuestra tienda encontrarás una amplia variedad de opciones para satisfacer tus necesidades musicales.
                                Desde cuerdas y baquetas hasta pedales y amplificadores, ofrecemos accesorios de marcas reconocidas y de alta calidad para músicos de todos los niveles.`,
      icon: faTachographDigital
    },
    {
      id: 3,
      titulo: " Pedidos especiales",
      descripcion: `Todo tipo de apartados y ofertas especiales para pedidos de instrumentos y accesorios, con la mejor atención al cliente y asesoramiento personalizado para garantizar que encuentres exactamente lo que necesitas.`,
      icon: faCubes
    }
  ];
    return(
        <>
        <Hero title={"Productos"} image={""} className=""/>
       {/* 1. Ajustamos las alturas del contenedor padre para que quepa todo el contenido en móvil (h-[550px]) y escritorio (md:h-[450px]) */}
        {/* ESTO FORZARÁ AL CARRUSEL A SALIRSE DE LA MITAD DE LA PANTALLA EN SERVICES */}
       
        <div data-aos="zoom-in" className="w-full max-w-7xl mx-auto px-4 ssm:pt-80 md:pt-10 pb-10">
      
          {/* 2. REJILLA DINÁMICA: 1 columna en móvil, 3 columnas en pantallas medianas/grandes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {servicios.map((servicio) => {
              const isSelected = selectedId === servicio.id;
              const hasSelection = selectedId !== null;
              const isDimmed = hasSelection && !isSelected;

              return (
                <div
                  key={servicio.id}
                  onClick={() => setSelectedId(servicio.id)}
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 shadow-xl
                    ${isSelected 
                      ? 'bg-linear-to-tr from-emerald-700 via-emerald-500 to-cyan-300 border-emerald-900 scale-[1.03] text-white z-10'
    
                      : isDimmed
                        ? 'bg-gray-50/50 dark:bg-blue-700/30 border-transparent opacity-30 scale-[0.97]'
                        : 'bg-linear-to-tr from-emerald-950 via-cyan-950 to-cyan-900 border border-cyan-800/50 text-white dark:text-white'
                    }`}
                >
                  {/* Contenedor del Icono superior */}
                  <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-amber-50 dark:bg-zinc-800 shadow-inner">
                    <FontAwesomeIcon 
                      icon={servicio.icon} 
                      className={`text-3xl transition-colors duration-300
                        ${isSelected ? 'text-amber-300' : 'text-cyan-400'}`}
                    />
                  </div>

                  {/* Contenido de la Tarjeta */}
                  <div className="flex flex-col items-center">
                    <h4 className={`font-sans font-stretch-semi-expanded italic uppercase tracking-wider font-bold text-xl mb-2
                      ${isSelected ? 'no-underline' : 'underline decoration-cyan-500'}`}>
                      {servicio.titulo}
                    </h4>
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-300
                      ${isSelected ? 'text-white' : 'text-white dark:text-gray-100'}`}>
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Botón para restablecer el estado y activar todas las tarjetas de nuevo */}
          {selectedId !== null && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setSelectedId(null)}
                className="px-5 py-2 text-sm bg-zinc-900 text-white dark:bg-emerald-700 dark:text-white rounded-full font-bold shadow-md hover:scale-105 transition-transform duration-200"
              >
                Mostrar todos los servicios
              </button>
            </div>
          )}

          <Carousel data-aos="flip-left"  className="mt-10" slide={true} slideInterval={3000}>

            <ProjectCard 
              title={<span>Guitarras</span>} 
              description={<span> Guitarra Acustica</span>}
              tags={["Guitarra", "Cuerdas", "Madera", "Yamaha", "Acustica"]}
              image="/GuitarraAcustica.jpeg"
              imageAlt="Guitarra Acustica"
              category="Guitarra"
              price="$2,999 MXN"
              specs={specs}
              />

              <ProjectCard 
              title={<span>Violines</span>} 
              status="en-curso"
              description={<span> Violines de <span className="font-bold">Madera</span></span>}
              tags={["Violines", "Cuerdas", "Madera"]}
              image="/Violin.webp"
              imageAlt="Violines de Madera"
              category="Violines"
              price="$1,799 MXN"
              specs={specs}
              />

              <ProjectCard 
              title={<span>Cuerdas</span>} 
              description={<span> Proveedor de Cuerdas Musicales</span>}
              tags={["Cuerdas", "Acero", "Nylon", "Sinteticas"]}
              image="/CuerdaGuitarra.jpeg"
              imageAlt="Cuerdas Musicales"
              category="Cuerdas"
              price="$40 MXN"
              specs={specs}
              />

              <ProjectCard 
              title={<span>Uñas</span>} 
              description={<span> Uñas de Guitarras</span>}
              tags={["Guitarras", "Violines", "Plastico", "Naylon", "Madera"]}
              image="/UniaGuitarra.jpeg"
              imageAlt="Uñas de Guitarras"
              category="Uñas"
              price="$25 MXN"
              specs={specs}
              />

              <ProjectCard 
              title={<span>Trompetas</span>} 
              status="terminado"
              description={<span> Trompetas</span>}
              tags={["Trompetas", "Boquillas", "Metal"]}
              image="/BoquillasTrompeta.jpeg"
              imageAlt="Trompetas"
              category="Trompetas"
              price="$3,500 MXN"
              specs={specs}
              />

            </Carousel>

        </div>
         
        </>
    )
}

export default Services;

