import React from 'react'
import { useState } from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, container, item, staggerContainer, cardVariants, textVariant2, textVarianting, ctaVariant } from '../utils/motion'



export default function CtaSectionEs() {
  const [playCount, setPlayCount] = useState(0);

  const handleEnded = () => {
    setPlayCount((prevCount) => prevCount + 1);
  };
  
  return (
  <div className=''>
    
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto">
            <motion.div
            variants ={fadeIn('up', "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: 'false', amount: .25}}
            className="flex flex-col text-center w-full mb-10 ">
                    <h2 className="text-indigo-500 tracking-widest font-medium title-font mb-1">BLOCKCHAIN PARA EL FUTURO</h2>
                    <div>
                      <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">Con Certificados Blockchain descubre cómo la tecnología puede transformar tu negocio hoy.</h1>
                      
                    </div>
            </motion.div>
      </div>
    </section>
    <motion.div 
    variants ={fadeIn('up', "tween", 0.3, 1)}
    initial="hidden"
    whileInView="show" 
    viewport={{ once: 'false', amount: .25}}
    className="w-full sm:w-[90%] 2xl:w-[85%] p-6 mx-auto space-y-24  lg:px-8 pb-24">
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2  lg:items-center">
                        <div className="lg:col-start-2 lg:items-start lg:text-left items-center text-center">
                          <div class="title-font sm:text-4xl text-4xl mb-4 font-medium gradient-text pb-5">Autenticidad y confianza, <p>enlazados para siempre.</p>
                          <h3 className="gradient-text2 text-6xl sm:text-6xl font-extrabold  titulos pt-2">CertSecure Pro</h3>
                        </div>
                            <p className="mt-3 text-lg text-gray-700 texto text-justify mr-5">¿Buscas garantizar la autenticidad y seguridad de tus credenciales? Nuestro servicio  de  Certificados Escoleres en la blockchain es la solución. Desde la verificación inmutable de logros académicos hasta la validación descentralizada de méritos, poseemos las herramientas y experiencia para elevar el valor y confianza de tus certificaciones al máximo nivel.</p>
                            <div className="mt-12 space-y-12 hidden lg:block">
                                <div class="flex justify-center">
                                  <a href="/contact.html" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Contáctanos
                                  </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 flex justify-center">
                        <video controls class="object-cover object-center rounded"
                          onEnded={handleEnded}
                          loop={playCount < 2} // El video se repetirá mientras playCount sea menor a 2 (0 y 1), por lo que se reproducirá un total de 3 veces.
                          muted
                          autoPlay 
                          alt="hero" 
                          width={300}
                          height={300}
                          src="https://imgcolibweb.s3.us-west-1.amazonaws.com/historias+40+(2).mp4"></video>
                          
                        </div>
                        <div class="flex justify-center pt-14 lg:hidden">
                                   <a href="/contact.html" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Contáctanos
                                  </a>
                                </div>
                    </div>
                </div>
            </motion.div>
    
  </div>
   

  )
}

