import React from 'react'
import Header from '../components/Header'

const careers = () => {
  return (
    <div>
        <header> 
            <Header />
        </header>
        <div className='pt-10'>
            <section className='flex items-center flex-col justify-center backgroundCarrer w-full h-[450px] mx-auto'>
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="titulos sm:text-4xl text-3xl mb-4 font-medium text-white">JOIN US</h1>
                    <p class="mb-8 pt-5 leading-relaxed title-font text-white text-lg">Join our skilled team to shape the digital future! We seek passionate individuals for innovative blockchain and web3 projects. Experience a dynamic work environment and make a difference. Contact us and start your exciting journey today!</p>
                <div class="flex justify-center pt-5">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Button</button>
                </div>
                </div>
            </section>
        </div>

    </div>
  )
}

export default careers