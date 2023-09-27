import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeadSolutions from '../components/HeadSolutions.js'
import Firewall from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website_servicios/public/images/nft-banner-5.webp'
import Companies from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website_servicios/public/images/nft-banner-2.webp'
import Schools from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website_servicios/public/images/nft-banner-3.webp'
import PreFooter from '../components/PreFooter.js'
import Image from 'next/image';
import HeadServices from '../components/HeadServices'


export default function services() {
  return (
    <div className='fondo'>
        <div>
            <Header />
        </div>
        <div> 
          <HeadServices />
        </div>

        <div>
        <div>
                    <section className=" pt-32">
                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                            
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">

                                
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Smart Contracts</h3>
                                    <p className="mt-3 text-lg dark:text-gray-900">Launch your next NFT collection with our help</p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-black">NFT consulting</h4>
                                                <p className="mt-2 text-base text-gray-800">We know that many times carrying out processes with Blockchain technology can be overwhelming and confusing.
                                                    Our team of experts will be able to advise and guide you in the needs of your project, explain what the requirements are and how you can
                                                    achieve your goal.</p>
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
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Smart Contract construction</h4>
                                                <p className="mt-2 text-base text-gray-800">Contracts can be written in ERC-721, ERC-1155, and ERC-20 token standards and are all built to be highly secure and gas efficient in today's market environment.</p>
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
                                                <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Minting site development</h4>
                                                <p className="mt-2 text-base text-gray-800">We help you create your minting website for your NFT's collection.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                     <Image
                                        src="https://imgcolibweb.s3.us-west-1.amazonaws.com/NFT+banner+Smart+contract.webp"
                                        alt="Bloques"
                                        className="mx-auto rounded-lg"
                                        width={938}
                                        height={788}
                                    />
                                </div>

                            </div>
                            <div className='pt-24'>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Web development</h3>
                                        <p className="mt-3 text-lg dark:text-gray-900">We offer the best security options for protect your data</p>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Web 3.0 integrations</h4>
                                                    <p className="mt-2 dark:text-gray-400">Unlock the full potential of blockchain technology with our Web 3.0 integrations. From decentralized finance to non-fungible tokens, we help you seamlessly integrate the latest blockchain solutions into your business.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Development</h4>
                                                    <p className="mt-2 dark:text-gray-400">A strong online presence is essential for any business in today's digital age. Our web development services help you build a professional, user-friendly website that reflects your brand and engages your audience. From custom design to e-commerce integration, we deliver a high-quality website that meets your unique needs.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Miting sites</h4>
                                                    <p className="mt-2 dark:text-gray-400">Take advantage of the booming NFT market with our minting site services. Our team of experts guides you through the process of creating and launching your own unique NFT collection. With our support, you can mint your digital assets and connect with a global audience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                        <Image
                                        src="https://imgcolibweb.s3.us-west-1.amazonaws.com/banner+Webdev+(1).webp"
                                        alt="Bloques"
                                        className="mx-auto rounded-lg"
                                        width={938}
                                        height={788}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-24'>
                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Tokens & Certificates</h3>
                                    <p className="mt-3 text-lg dark:text-gray-900">Let us help your bussines geting into the Web 3.0</p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-black">Smart Contracts</h4>
                                                <p className="mt-2 dark:text-gray-400">Our smart contracts bring security and transparency to your business operations.</p>
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
                                                <h4 className="text-lg font-medium leading-6 text-black">dApps</h4>
                                                <p className="mt-2 dark:text-gray-400">We create robust, efficient decentralized applications using cutting-edge blockchain technologies.</p>
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
                                                <h4 className="text-lg font-medium leading-6 text-black">Web Development</h4>
                                                <p className="mt-2 dark:text-gray-400">We offer top-tier web development services, blending creativity with technical know-how.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                <Image
                                        src="https://imgcolibweb.s3.us-west-1.amazonaws.com/banner+Tokens2.webp"
                                        alt="Bloques"
                                        className="mx-auto rounded-lg"
                                        width={938}
                                        height={788}
                                    />
                                </div>
                            </div>
                            <div className='pt-24'>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Blockchain Consulting</h3>
                                        <p className="mt-3 text-lg dark:text-gray-900">We can help you solve all your doubts and projects with our consultancy. We have experts in the field who can guide you in implementing blockchain solutions for your company.</p>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leading-6 text-black">Diagnosis</h4>
                                                    <p className="mt-2 dark:text-gray-400">Discover facts - analysis and synthesis - examine the problem in detail.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 text-black">Action plan</h4>
                                                    <p className="mt-2 dark:text-gray-400">Plan measures - Develop solutions, different options - Present improvement proposals to the client and how we will implement them.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 text-black">Implementation</h4>
                                                    <p className="mt-2 text-base text-gray-800">Contribute to the application - Proposal for adjustments - Training.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                    <Image
                                        src="https://imgcolibweb.s3.us-west-1.amazonaws.com/banner+consulting.webp"
                                        alt="Bloques"
                                        className="mx-auto rounded-lg"
                                        width={938}
                                        height={788}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">NFT's</h3>
                                    <p className="mt-3 text-lg dark:text-gray-900">Let us help your bussines geting into the Web 3.0</p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-black">Smart Contracts</h4>
                                                <p className="mt-2 dark:text-gray-400">We will create high-fidelity contracts tailored to the needs of your project with our team of developers.</p>
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
                                                <h4 className="text-lg font-medium leading-6 text-black">Image & metadata management</h4>
                                                <p className="mt-2 dark:text-gray-400">"Stand out in the market with high-quality NFTs thanks to our image and metadata management. Create unique and attractive NFTs with our help!</p>
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
                                                <h4 className="text-lg font-medium leading-6 text-black">Launch</h4>
                                                <p className="mt-2 dark:text-gray-400">We will help you manage the launch of your collection, from creating your mining site, whitelist, public sale, and more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/nft-banner.webp"
                            alt="Bloques"
                            className="mx-auto border-2 border-indigo-600 rounded-lg"
                            width={500}
                            height={500}
                        />
                                </div>
                            </div>
                            
                        </div>
                        </div>
            </section>
        </div>

        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

