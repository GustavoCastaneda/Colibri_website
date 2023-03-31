import React from 'react'
import Image from 'next/image'
import blocks from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/NFT banner (6).png'
import Link from 'next/link'
import Blog from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/blog-banner.webp'


const Blogs = () => {
  return (
            <section class="text-gray-600 body-font">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-gray-900">Learn more about</h2>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="cta h-full  border-opacity-60 rounded-lg overflow-hidden">
                        <Link href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb">
                            <Image class="lg:h-80  pt-3 md:h-36 w-full object-cover object-center" src={blocks} alt="blog" /> 
                        </Link>
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog</h2>
                            <a href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb" className="title-font text-lg font-medium text-blue-900 mb-3">How Blockchain is Revolutionizing Business Processes</a>
                            <p class="leading-relaxed text-gray-500 mb-3 pt-2">Blockchain technology is disrupting conventional business models by providing more secure, transparent, and decentralized solutions. It has the potential to transform the way businesses operate, from financial services to supply chain management...</p>
                            <div class="flex items-center flex-wrap ">
                            <a href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb"class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="cta h-full  border-opacity-60 rounded-lg overflow-hidden">
                        <Link href="https://medium.com/@_colibri/how-dapps-have-changed-the-world-70919e644e48">
                            <Image class="lg:h-80  pt-3 md:h-36 w-full object-cover object-center" src={Blog} alt="blog" /> 
                        </Link>
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog</h2>
                            <a href="https://medium.com/@_colibri/how-dapps-have-changed-the-world-70919e644e48" className="title-font text-lg font-medium text-blue-900 mb-3">Unleashing the Power of Decentralization: The Rise of Dapps</a>
                            <p class="leading-relaxed text-gray-500 mb-3 pt-2">Decentralized applications, or Dapps, have revolutionized the way we interact with technology and each other. These apps run on decentralized networks, allowing users to interact with each other directly...</p>
                            <div class="flex items-center flex-wrap ">
                            <a href="https://medium.com/@_colibri/how-dapps-have-changed-the-world-70919e644e48"class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="cta h-full  border-opacity-60 rounded-lg overflow-hidden">
                        <Link href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb">
                            <Image class="lg:h-80  pt-3 md:h-36 w-full object-cover object-center" src={blocks} alt="blog" /> 
                        </Link>
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog</h2>
                            <a href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb" className="title-font text-lg font-medium text-blue-900 mb-3">How Blockchain is Revolutionizing Business Processes</a>
                            <p class="leading-relaxed text-gray-500 mb-3 pt-2">Blockchain technology is disrupting conventional business models by providing more secure, transparent, and ...</p>
                            <div class="flex items-center flex-wrap ">
                            <a href="https://medium.com/@_colibri/how-blockchain-is-revolutionizing-business-processes-ed6204474cbb"class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                        <div className='flex items-center justify-center pt-10'>

                         <Link href="https://medium.com/@_colibri">   
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gl  text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Read more articles
                                </span>
                            </button>
                            </Link>   
                        </div>
                    </div>

        
            </section>

    
  )
}

export default Blogs