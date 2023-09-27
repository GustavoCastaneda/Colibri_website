import React from 'react'
import Image from 'next/image';
import GetStartedEs from './GetStartedEs'

export default function Feature3Es() {
  return (
    <div>
        <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-gray-900">¡Comienza con nosotros!</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-center relative text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-300 text-2xl font-bold">POSIBILIDADES ILIMITADAS</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-5xl">Aqui vienen los NFT's</h3>
                        <p className="mt-3 text-lg">¿Estás emocionado por llevar tu arte al siguiente nivel y lanzar tu propia colección de NFTs? Con nuestro equipo, te proporcionamos todas las herramientas que necesitas para hacerlo realidad.</p>
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
                                    <h4 className="text-lg font-medium leading-6 ">Smart Contracts</h4>
                                    <p className="mt-2">Crearemos contratos de alta fidelidad adaptados a las necesidades de tu proyecto con nuestro equipo de desarrolladores.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Gestión de imágenes y metadatos.</h4>
                                    <p className="mt-2">Destácate en el mercado con NFTs de alta calidad gracias a nuestra gestión de imágenes y metadatos. ¡Crea NFTs únicos y atractivos con nuestra ayuda!</p>
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
                                <GetStartedEs />
                                
                        
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/nft-banner.webp"
                            alt="Bloques"
                            className="mx-auto border-2 border-indigo-600 rounded-lg"
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
