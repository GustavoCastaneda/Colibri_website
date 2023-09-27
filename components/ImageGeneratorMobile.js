import React from 'react'

const ImageGeneratorMobile = () => {
  return (
    <div>
        <section>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 mesh3">
                <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    
                </div>
                <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <div className='mx-auto'>
                    <div className='gradient-text2 pb-5'>
                            <h1 class=" sm:text-6xl text-5xl mb-4 titulos ">DreamLens: 
                            <p class="">AI Image Creator</p>
                            </h1>
                    </div>
                    <div className='pb-10'>
                        <div class="relative w-full max-w-lg">
                            <div class="absolute top-0 rounded-full  -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                            
                            <div class="relative">
                                <img class="object-cover object-center mx-auto rounded-lg shadow-2xl border-2 border-purple-600" alt="hero" src="https://imgcolibweb.s3.us-west-1.amazonaws.com/Free-your-imagination.webp"></img>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    <p class="mb-8 text-lg leading-relaxed text-center text-white">Empower your creativity and business with DreamLens: AI Image Creator. Not only do we offer an intuitive platform for generating AI-driven images, but we also provide full implementation services for integrating our cutting-edge technology into your existing systems. Whether you're a designer, marketer, or enterprise, we have a tailored solution for you.</p>
                    <div class="mt-0 lg:mt-6 max-w-7xl sm:flex mx-auto pb-10">
                        <div class="mt-3 rounded-lg sm:mt-0">
                            <button class="items-center block px-7 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-auto">Princing</button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                            <button class="items-center block px-5 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-200">Contact Us</button>
                        </div>
                    </div>
                  
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ImageGeneratorMobile