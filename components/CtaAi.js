import React from 'react'
import ClientsBar from './ClientsBar'

const CtaAi = () => {
  return (
    <div className='relative isolate px-6 lg:px-8'>
      {/* <div className='hidden lg:block'>
        <div class="gradient">
              <section class="gradient-section text-white">
                <div className='z-10'>
                  <ClientsBar />  
                </div> 
      
              </section>
        </div>
      </div> */}
      <div className=''>
        <div className='flex justify-center text-white titulos text-2xl'>
          Companies we work with
        </div>
          <div className='flex justify-center'>
            <div class="mt-7 flex gap-5 md:gap-16 lg:gap-15 justify-center grayscale dark:grayscale-0 items-center">
                <img src="/images/openai-wordmark.svg" class="h-6 sm:h-9 w-auto lg:h-10" alt="" />
                <img src="https://www.vanenburg.com/wp-content/uploads/2021/03/pasted-image-0.png" class="h-9 sm:h-14 w-auto lg:h-14" alt="" />
                <img src="/images/Microsoft_Azure-Logo.wine.svg" class="h-14 sm:h-28 w-auto lg:h-17" alt="" />
                <img src="/images/Amazon_Web_Services_Logo.svg" class="h-7 sm:h-12 w-auto lg:h-12" alt="" />
            </div>
          </div>
      </div>
      
        
    </div>
  )
}

export default CtaAi



