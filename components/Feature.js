import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Typing from 'react-typing-animation';
import TypingComponent from './TypingComponent.js';
import { motion } from 'framer-motion';
import { fadeIn, container, item, staggerContainer, cardVariants, textVariant2, textVarianting, ctaVariant } from '../utils/motion'



export default function Feature() {
    return ( 
        
        
        <div className='bg-white'>
            
            <div className="flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col items-center relative ">
                    <div className="flex flex-col pt-5  w-full sm:w-[75%] xl:w-[70%]">
                        <h1 className="w-full uppercase text-center text-4xl sm:text-5xl font-semibold text-blue-900">
                            Let´s code your new 
                            <p>Smart Contract</p> 
                        </h1>
                        <div className='pt-10'>
                            <motion.div 
                            variants = { ctaVariant (1.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.8 }}
                            className=' rounded-lg w-full h-[470px] border-2 border-indigo-600'>
                                
                                <div className='h-[50px] mx-4 space-x-1 border-b border-indigo-600'>
                                    <button class="bg-red-500 py-2 px-2 rounded-full"></button>
                                    <button class="bg-yellow-400 py-2 px-2 rounded-full"></button>
                                    <button class="bg-green-500 py-2 px-2 rounded-full"></button>
                                </div>
                                <div className='mx-4'>
                                    <div className='typing pt-4'>
                                        <div> 
                                            <TypingComponent />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex items-center justify-center mt-4 pt-8">
                            <motion.div 
                            variants ={fadeIn('up', "tween", 0.3, 1)}
                            initial="hidden"
                            whileInView="show" 
                            viewport={{ once: 'false', amount: .25}}>
                                <button type="button" className="text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-gl px-7 py-3 text-center mr-2 mb-2">Get started</button>
                            </motion.div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    
  )
}

