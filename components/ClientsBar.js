import React from 'react'

const  ClientsBar= () => {
  return (
    <div>
      <div className='flex justify-center items-center  text-2xl titulos pt-10'>
        Companies we work with
      </div>
      
        <div className="w-[750px] items-center mt-12 flex gap-6 lg:gap-12 2xl:gap-16 justify-between">
            <img src="/images/openai-wordmark.svg" alt="Logo 1" className="mx-2 w-[140px]" />
            <img src="https://www.vanenburg.com/wp-content/uploads/2021/03/pasted-image-0.png" alt="Logo 2" className="mx-2 w-[110px]" />
            <img src="/images/Microsoft_Azure-Logo.wine.svg" alt="Logo 3" className="mx-2 w-[200px]" />
            <img src="/images/Amazon_Web_Services_Logo.svg" alt="Logo 4" className="mx-2 w-[100px]" />
        </div>
    </div>
  )
}

export default ClientsBar