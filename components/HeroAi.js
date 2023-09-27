import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function HeroAI() {

  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl md:py-32 py-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-400">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-500">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl gradient-textAi sm:text-[95px]  leading-tight pb-5 md:pb-0">
              Unleashing the power of
            </h1>
            <div className='content'>
              <p className='gradient-text3 sm:text-[85px] text-[57px] titulos leading-tight font-bold '>Artificial Intelligence</p>
            </div>
           
            
            
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                Specializing in AI implementation, we integrate technologies like DALL-E, Google Text-to-Speech, and Azure to advance your operations. Let us set you ahead in the digital age. and set you ahead in the digital age.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-400">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>
    </div>
  )
}