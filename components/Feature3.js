import React from 'react'
import Image from 'next/image'
import Bloques from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/NFT banner (6).png' 
import NFT from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/nft-banner.webp'
import GetStarted from './GetStarted'

export default function Feature3() {
  return (
    <div>
        <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-6xl text-gray-900">Get started with us!</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-center relative text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-300 text-2xl font-bold">UNLIMITED POSSIBILITIES</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-5xl dark:text-gray-50">Here comes the NFT's</h3>
                        <p className="mt-3 text-lg dark:text-gray-400">Are you excited to take your art to the next level and launch your own collection of NFTs? with our team, we provide you with all the tools you need to make it a reality.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className=" flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Smart Contracts</h4>
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
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Image & metadata management</h4>
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
                                <GetStarted />
                                
                                
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Image
                            src="https://imgcolibweb.s3.us-west-1.amazonaws.com/nft-banner.webp"
                            alt="Bloques"
                            className="mx-auto border-2 border-indigo-600 rounded-lg"
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
