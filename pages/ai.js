import React from 'react'
import HeaderAi from '../components/HeaderAi'
import HeroAI from '../components/HeroAi'
import CtaAi from '../components/CtaAi'
import ImageGenerator from '../components/ImageGenerator'
import Head from 'next/head'
import ImageSlider from '../components/ImageSlider'
import ImageGeneratorMobile from '../components/ImageGeneratorMobile'
import ImageSliderMobile from '../components/ImageSliderMobile'

const careers = (props) => {
  return (
    <div>
      <Head>
            <title>Colibri Blockchain & AI-Web 3.0 & AI Solutions</title>
          </Head>

       <div className='h-[1500px]'>
          <div className='mesh'>
              <header> 
                  <HeaderAi />
              </header>
              <section >            
                  <HeroAI />
              </section>
          </div>
          <div className='mesh2 pb-2 pt-2'>
                  <CtaAi />
          </div>
          <div className='hidden lg:block'>
            <ImageGenerator />
          </div>
          <div className='lg:hidden'>
            <ImageGeneratorMobile />
          </div>
          <div className='bg-black h-[900px] '>
            <ImageSlider />
          </div>
         
      </div>
    </div>
    
   
  )
}

export default careers