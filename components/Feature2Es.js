import React from 'react'
import Image from 'next/image';



export default function Feature2Es() {
  return (
    <div>
        <section>
            <div className="w-full sm:w-[90%] 2xl:w-[85%] p-6 py-12 mx-auto space-y-24 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-gray-900">¡Comienza con nosotros!</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-center relative text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-red-500 text-2xl font-bold">POSIBILIDADES ILIMITADAS</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className='gradient-text w-[351px] sm:w-[365px]'>
                            <h3 className="gradient-text text-5xl sm:text-6xl font-extrabold  titulos">COMPAÑIAS</h3>
                        </div>
                        <p className="mt-3 mr-5 text-base sm:text-lg text-gray-700 texto text-justify">¿Buscas mejorar los procesos y la seguridad de tu empresa? Nuestros servicios de blockchain pueden ayudar. Desde el desarrollo de contratos inteligentes hasta la gestión descentralizada de datos, contamos con las herramientas y experiencia para llevar tu negocio al siguiente nivel.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className=" flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800">Smart Contracts</h4>
                                    <p className="mt-2 text-[16px] text-gray-700 texto text-justify mr-5">Crearemos contratos de alta fidelidad adaptados a las necesidades de tu proyecto con nuestro equipo de desarrolladores.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6 text-gray-800">Gestión de imágenes y metadatos.</h4>
                                    <p className="mt-2 text-[15px] text-gray-700 texto text-justify mr-5">Destácate en el mercado con NFTs de alta calidad gracias a nuestra gestión de imágenes y metadatos. ¡Crea NFTs únicos y atractivos con nuestra ayuda!</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6 text-gray-800">Lanzamiento</h4>
                                    <p className="mt-2 text-gray-700 texto text-[16px] text-justify mr-5">Te ayudaremos a gestionar el lanzamiento de tu colección, desde la creación de tu sitio de minería, lista blanca, venta pública y más.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-DAO.webp"
                            alt="Bloques"
                            className="mx-auto"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
               
            </div>
            <div className="w-full sm:w-[90%] 2xl:w-[85%] p-6 mx-auto space-y-24 lg:px-8">
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 pt-10 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className='w-[370px]'>
                                <h3 className="gradient-text text-6xl font-extrabold titulos">DESARROLLO WEB</h3>
                            </div>
                            <p className="mt-3 text-[16px] text-gray-700 texto text-justify mr-5">¿Estás listo para llevar tu proyecto de desarrollo web al siguiente nivel? Nuestro equipo puede proporcionarte las herramientas y la experiencia que necesitas para hacerlo realidad. ¡Empecemos!</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Integraciones en Web 3.0</h4>
                                        <p className="mt-2 text-[16px] text-gray-700 texto text-justify mr-5">Desbloquea el potencial completo de la tecnología blockchain. Desde finanzas descentralizadas, tokens no fungibles, te ayudamos a integrar las últimas soluciones blockchain en tu negocio.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Desarrollo</h4>
                                        <p className="mt-2 text-[16px] text-gray-700 texto text-justify mr-5">Nuestros servicios de desarrollo web te ayudan a construir un sitio web profesional con la ayuda de UI/Ux que refleje tu marca y atraiga a tu audiencia.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Sitios de minteo de NFTs</h4>
                                        <p className="mt-2 text-[16px] text-gray-700 texto text-justify mr-5">Nuestro equipo de expertos te guía a través del proceso de crear y lanzar tu propia colección única de NFTs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image
                                src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-webdev.webp"
                                alt=""
                                className="mx-auto rounded-lg"
                                
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
               
                <div className="grid lg:gap-8 lg:grid-cols-2 pt-16 lg:items-center">
                    <div>
                        <div className='sm:w-[650px] w-[345px]'>
                            <h3 className="gradient-text text-5xl sm:text-8xl font-extrabold titulos">CONSULTORIA BLOCKCHAIN</h3>
                        </div>
                        <p className="mt-3 text-lg text-gray-700 texto text-justify mr-5">Podemos ayudarte a resolver todas tus dudas y proyectos con nuestra consultoría. Contamos con expertos en el campo que pueden guiarte en la implementación de soluciones blockchain para tu empresa.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Diagnostico</h4>
                                    <p className="text-justify mr-5 mt-2 text-[18px] text-gray-700 texto">Descubre hechos - análisis y síntesis - examina el problema en detalle.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Plan de accion</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto text-justify mr-5">Planea medidas - Desarrolla soluciones, diferentes opciones - Presenta propuestas de mejora al cliente y cómo las implementaremos.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Implementación</h4>
                                    <p className=" text-justify mr-5 mt-2 text-[18px] text-gray-700 texto">Contribuye a la aplicación - Propuesta para ajustes - Capacitación.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-consul.webp"
                            alt=""
                            className="mx-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                
            </div>
</section>
</div>
  )
}
