import React from 'react'
import Image from 'next/image'
import Bloques from '../public/images/NFT banner (6).png' 
import Pruebas from '../components/Pruebas.js'
import Particles from '../components/Particles.js'

export default function CtaSection2()  {
  return (
    <div>
        <section className="bg-transparent">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image className="w-full  dark:block" alt="Bloques" src={Bloques}/>
                
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:from-blue-400 dark:to-blue-700">Let's create more tools and ideas that brings us together.</h2>
                    <p className="mb-6 pt-10 font-semibold text-xl text-gray-900 md:text-xl ">Transform Your Business with Next-Generation Blockchain Technology: Discover Our Comprehensive Range of Exclusive Features</p>
                    <div>
                      
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#" className="flex w-1/3 items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Discover</a>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

