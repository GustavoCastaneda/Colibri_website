import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, container, item, staggerContainer, cardVariants, textVariant2, textVarianting, ctaVariant } from '../utils/motion'



export default function CtaSection() {
  return (
  <div className=''>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
            <motion.div
            variants ={fadeIn('up', "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: 'false', amount: .25}}
            className="flex flex-col text-center w-full mb-10 ">
                    <h2 className="text-indigo-500 tracking-widest font-medium title-font mb-1">BLOCKCHAIN FOR THE FUTURE</h2>
                    <div>
                      <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">Discover how blockchain technology can transform your business today</h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-[20px] texto">Revolutionize Your Business with the Decentralized and Secure Potential of Blockchain Technology, by implementing blockchain solutions, companies can increase transparency, reduce costs, and improve efficiency.</p>
                    </div>
            </motion.div>
              <div className="container px-5 mx-auto ">
                <motion.div 
                variants= { staggerContainer }
                initial="hidden"
                whileInView="show" 
                viewport={{ once: 'false', amount: .25}}
                className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <motion.div 
                  variants = { ctaVariant (1.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  className=" p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                            </div>
                            <div className="flex-grow px-8 cta rounded-xl">
                              <h2 className="text-gray-900 text-xl mb-3 titulosCta ">Decentralization</h2>
                              <p className="leading-relaxed texto">Blockchain uses a decentralized network of nodes to maintain an identical copy of the transaction record. This means that there is no single point of failure and the network is not controlled by a single central entity.</p>
                              
                            </div>
                  </motion.div>
                  <motion.div
                  variants = { ctaVariant (1.2) }
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  className="py-4 md:w-1/3 flex flex-col text-center items-center ">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10" viewBox="0 0 24 24">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            </div>
                            <div className='flex-grow border-x-2 px-8 border-gray-200 border-opacity-60'>
                              <div className='cta rounded-xl'>
                                <h2 className="text-gray-900 text-xl mb-3 titulosCta">Security</h2>
                                <p className="leading-relaxed texto">Transactions on the blockchain network are validated and confirmed by multiple nodes before being added to the transaction record. This means that transactions are immutable and resistant to tampering.</p>
                              </div>
                            </div>
                  </motion.div>
                  <motion.div 
                  variants = { ctaVariant (1.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  className=" p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                            </svg>
                            </div>
                            <div className="flex-grow px-8 cta rounded-xl">
                              <h2 className="text-gray-900 text-lg titulosCta mb-3">Efficiency</h2>
                              <p className="leading-relaxed texto">Blockchain allows for the execution of smart contracts, which means that the terms and conditions of an agreement can be programmed into the code.</p>
                            </div>
                  </motion.div>
            </motion.div>
          </div>
      </div>
    </section>
  </div>
   

  )
}

