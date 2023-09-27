import React from 'react'

const ImageSlider = () => {
  return (
    <div>
        <div className='text-white'>
            <h1 className='flex justify-center titulos text-5xl pt-10 gradient-text3'>
                We set the PROMPTS; 
            </h1>
            <p className='flex justify-center titulos text-5xl pt-2 gradient-text4'>you bring the IDEAS</p>
            
            <div>
                <div className='alineacion md:mx-36 pt-8 text-xl texto'>
                Focus on your vision; we'll handle the rest. With the right prompts for DALL·E, you just dream and envision, while we perfect the execution. Leave the technology to us and let your creativity flow boundlessly. <p className='text-[16px] text-gray-300'>(Hover to check)</p>
                </div>
            </div>
            
            
        <div class="containerSlider">
            <div class="card card0">
                <div class="border1 flex justify-center">
                     <h2 className='titulos flex items-center md:pt-[200px] md:mx-6 mx-2 md:text-xl font-bold pt-40 text-[10px]'>"An expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula"</h2>
                
                </div>
                
            </div>
        <div class="card card1">
                <div class="border1 flex justify-center">
                     <h2 className='titulos flex items-center md:pt-60 mx-6 text-xs font-bold md:text-xl pt-40'>"Futuristic planet landscape at night"</h2>
                
                </div>
        </div>
        <div class="card card2">
                <div class="border1 flex justify-center">
                     <h2 className='titulos flex items-center md:pt-[230px] pt-32 md:mx-4 mx-2 md:text-[18px] font-bold text-[10px]'>"An luxurious futuristic electric car, on the futuristic road with the stars on the sky background, high detail"</h2>
                
                </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default ImageSlider