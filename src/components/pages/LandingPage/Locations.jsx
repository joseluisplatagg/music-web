import Contacto from "./Contacto";
import Hero from "../../layouts/Hero";
import { Route } from '../../../routes/__root'
import SocialMedia from './SocialMedia'
import Email from "../../layouts/Email";

const Locations = () => {
    return(
            <>
            <Hero title={"Contacto"} image={""} className=""/>

            <div className="w-full max-w-7xl mx-auto p-6 bg-neutral-primary-soft rounded-base shadow-xl my-8">
    
            {/* REJILLA DIRECTA: 1 columna en móvil, 2 columnas iguales en escritorio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                
                {/* LADO IZQUIERDO: EL MAPA */}
                {/* 'w-full h-80 md:h-[450px]' le da una altura fija y proporcional en cualquier pantalla */}
                <div data-aos="fade-in"  className="w-full h-80 md:h-112.5 rounded-xl overflow-hidden shadow-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.0776048376556!2d-99.03406675592782!3d19.542219210883182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f00c48a737ed%3A0xd7bb879ede3a61a7!2sCd%20Azteca%201ra%20Secc%2C%20Ecatepec%20de%20Morelos%2C%20State%20of%20Mexico!5e0!3m2!1sen!2smx!4v1794936012329!5m2!1sen!2smx" 
                        className="w-full h-full border-0"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* LADO DERECHO: EL FORMULARIO DE CONTACTO */}
                {/* Eliminamos el 'px-15' fijo que desbordaba el diseño en pantallas medianas */}
                <div data-aos="slide-left"  className="w-full px-2 md:px-6">
                    <Contacto />
                </div>    

            </div> 

            {/* <div data-aos="fade-up">
                <SocialMedia   />
            </div>  */}

            
            
        </div>

            </>
        )
};

export default Locations;

