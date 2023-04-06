import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, navVariants, ctaVariant, imgPrincipal, fadeIn } from '../utils/motion'
import { useState, useEffect } from "react";




export default function Main()  {
    
  return (
    <div>
            <section className='flex lg:flex-row flex-col sm:py-16 py-6'>

                <motion.div 
                variants={ staggerContainer }
                initial="hidden"
                whileInView="show"
                viewport={{ once: 'flase', amount: 0.25 }}
                className=' flex-1 flex justify-center items-start flex-col xl:px-13 sm:px-16 px-6'>
                    
                    <div className='flex flex-row justify-between items-center w-full '>
                        <motion.h1 variants={textVariant(1.1)}className='text-center md:text-center lg:text-left font-black text-[50px] sm:text-7xl md:text-7xl xl:text-[96px] text-black flex-1'>
                            Welcome <p><span>to the</span></p><p
                            ><span className="relative font-sans text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">BLOCKCHAIN</span></p>
                        </motion.h1>
                        
                    </div>
                    <div>
                        <motion.p variants={ textVariant(1.2)} className="text-center md:text-center w-full mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-2xl font-bold pt-10">
                            We specialize in web3 development services and blockchain related solutions for businesses.</motion.p>

                        <motion.div variants={ navVariants }
                            initial="hidden"
                            whileInView="show" 
                            viewport={{ once: 'flase', amount: 0.25 }}
                            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="text-white w-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-gl px-10 py-5 text-center mr-2 mb-2 ">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Malesuada</a>
                        </motion.div>    
                    </div>
                </motion.div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: 'flase', amount: 0.25 }}
                    exit="hidden"
                    transition={{ duration: 1 }}
                >
                    <div className="desktop-animation">
                        <motion.div
                            variants={slideIn('right', 'tween', 1, 1)}
                            className="flex-1 flex justify-center items-center md:my-0 pt-12 relative md:py-10 lg:py-0"
                        >
                            <div className="illus z-5">
                            <Image
                                src="https://imgcolibweb.s3.us-west-1.amazonaws.com/What-is-cryptocurrency.webp"
                                width={500}
                                height={500}
                                alt="coins"
                                priority
                            />
                            </div>
                        </motion.div>
                    </div>

                        {/* Versión móvil */}
                    <div className="mobile-animation">
                            <motion.div
                                    variants ={fadeIn('up', "tween", 0.9, 2)}
                                    initial="hidden"
                                    animate="show" 
                                className="flex-1 flex justify-center items-center md:my-0 pt-12 relative md:py-10 lg:py-0"
                            >
                                <div className="illus z-5">
                                <Image
                                    src="https://imgcolibweb.s3.us-west-1.amazonaws.com/What-is-cryptocurrency.webp"
                                    width={500}
                                    height={500}
                                    alt="coins"
                                    priority
                                />
                                </div>
                            </motion.div>
                    </div>
                </motion.div>
            </section>
    </div>

    
    
    
      
      
   
  )
}
