import React from 'react'

const ImageGenerator = () => {
  return (
    <div className='text-white mesh3 relative isolate px-6 lg:px-8'>
        <div className="mx-auto max-w-7xl">
            <section class="text-gray-100 body-font ">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-[200px] mb-10 md:mb-0">
                        <img class="object-cover object-center rounded-3xl border-2 border-purple-800" alt="hero" src="https://imgcolibweb.s3.us-west-1.amazonaws.com/Free-your-imagination.webp"></img>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                        <div className='gradient-text2'>
                            <h1 class=" sm:text-6xl text-3xl mb-4 titulos">DreamLens: 
                            <p class="hidden lg:inline-block">AI Image Creator</p>
                            </h1>
                        </div>
                    
                        <p class="mb-8 leading-relaxed texto text-lg xl:pt-7">Empower your creativity and business with DreamLens: AI Image Creator. Not only do we offer an intuitive platform for generating AI-driven images, but we also provide full implementation services for integrating our cutting-edge technology into your existing systems. Whether you're a designer, marketer, or enterprise, we have a tailored solution for you.</p>
                        <div class="flex justify-center mx-auto xl:pt-7">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Princing</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default ImageGenerator