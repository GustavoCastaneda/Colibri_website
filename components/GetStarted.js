import React from 'react'

const GetStarted = () => {
  return (
    <div>
        <div className="ml-4">
            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Launch</h4>
            <p className="mt-2 dark:text-gray-400">We will help you manage the launch of your collection, from creating your mining site, whitelist, public sale, and more.</p>

            <div className='pt-10'>
                <a href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb"className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-blue-400 dark:to-blue-700 text-indigo-700 inline-flex items-center md:mb-2 text-xl lg:mb-0 font-semibold">Get started
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                    
                </a>
            </div>
        </div>
    </div>
  )
}

export default GetStarted