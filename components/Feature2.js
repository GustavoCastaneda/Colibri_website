import React from 'react'
import Image from 'next/image'



export default function Feature2() {
  return (
    <div>
        <section>
            <div className="w-full sm:w-[90%] 2xl:w-[85%] p-6 py-12 mx-auto space-y-24 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-gray-900">Get started with us!</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-center relative text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-red-500 text-2xl font-bold">UNLIMITED POSSIBILITIES</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lgnpm:items-center">
                    <div>
                        <div className='gradient-text w-[355px]'>
                            <h3 className="gradient-text text-6xl font-extrabold  titulos">COMPANIES</h3>
                        </div>
                        <p className="mt-3 text-lg text-gray-700 texto">Are you looking to improve your company's processes and security? Our blockchain services can help. From smart contract development to decentralized data management, we have the tools and expertise to take your business to the next level.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className=" flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800">Smart Contracts</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto">We will create high-fidelity contracts tailored to the needs of your project with our team of developers.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6 text-gray-800">Image & metadata management</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto">Stand out in the market with high-quality NFTs thanks to our image and metadata management. Create unique and attractive NFTs with our help!</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6 text-gray-800">Launch</h4>
                                    <p className="mt-2 text-gray-700 texto text-[18px]">We will help you manage the launch of your collection, from creating your mining site, whitelist, public sale, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-DAO.webp"
                            alt="Bloques"
                            className="mx-auto"
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
               
            </div>
            <div className="w-full sm:w-[90%] 2xl:w-[85%] p-6 py-12 mx-auto space-y-24  lg:px-8">
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 pt-40 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className='w-[350px]'>
                                <h3 className="gradient-text text-7xl font-extrabold titulos">WEB DEV</h3>
                            </div>
                            <p className="mt-3 text-lg text-gray-700 texto">Are you ready to take your web development project to the next level? Our team can provide you with the tools and expertise you need to make it a reality. Let's get started!</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Web 3.0 integrations</h4>
                                        <p className="mt-2 text-[18px] text-gray-700 texto">Unlock the full potential of blockchain technology with our Web 3.0 integrations. From decentralized finance to non-fungible tokens, we help you seamlessly integrate the latest blockchain solutions into your business.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Development</h4>
                                        <p className="mt-2 text-[18px] text-gray-700 texto">A strong online presence is essential for any business in today's digital age. Our web development services help you build a professional, user-friendly website that reflects your brand and engages your audience. From custom design to e-commerce integration, we deliver a high-quality website that meets your unique needs.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-[23px] leading-6  text-gray-800 texto">Miting sites</h4>
                                        <p className="mt-2 text-[18px] text-gray-700 texto">Take advantage of the booming NFT market with our minting site services. Our team of experts guides you through the process of creating and launching your own unique NFT collection. With our support, you can mint your digital assets and connect with a global audience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image
                                src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-webdev.webp"
                                alt=""
                                className="mx-auto rounded-lg"
                                layout="responsive"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
               
                <div className="grid lg:gap-8 lg:grid-cols-2 pt-40 lg:items-center">
                    <div>
                        <div className='sm:w-[550px] w-[450px]'>
                            <h3 className="gradient-text text-6xl sm:text-7xl font-extrabold titulos">BLOCKCHAIN CONSULTING</h3>
                        </div>
                        <p className="mt-3 text-lg text-gray-700 texto">We can help you solve all your doubts and projects with our consultancy. We have experts in the field who can guide you in implementing blockchain solutions for your company.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Diagnosis</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto">Discover facts - analysis and synthesis - examine the problem in detail.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Action plan</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto">Plan measures - Develop solutions, different options - Present improvement proposals to the client and how we will implement them.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-[23px] leading-6  text-gray-800 texto">Implementation</h4>
                                    <p className="mt-2 text-[18px] text-gray-700 texto"> Contribute to the application - Proposal for adjustments - Training.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT-consul.webp"
                            alt=""
                            className="mx-auto"
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                
            </div>
</section>
</div>
  )
}
