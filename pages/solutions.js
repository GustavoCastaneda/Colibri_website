import React from 'react'
import Header from '../components/Header.js'
import HeadSolutions from '../components/HeadSolutions.js'
import NftBanner from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/nft-banner.webp'
import Firewall from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/nft-banner-5.webp'
import Companies from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/nft-banner-2.webp'
import Schools from '/Users/gustavoadolfocastanedaheras/Desktop/Colibri/Colibri_website/public/images/nft-banner-3.webp'
import Footer from '../components/Footer.js'
import PreFooter from '../components/PreFooter.js'

import Image from 'next/image';
import CtaSection2 from '../components/CtaSection2.js'


export default function solutions()  {
  return (
    <div  className='fondo'>
        <div>
          <Header />
        </div>
        <section className='pt-6'>
          <HeadSolutions />
        </section>
       
        
        
        
        <div>
                    <section className=" pt-32">
                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                            
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">NFT´s</h3>
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
                                    <Image src={NftBanner} alt="Nft banner" />
                                </div>
                            </div>
                            <div className='pt-24'>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Security</h3>
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
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cibo augue offendit has ad</h4>
                                                    <p className="mt-2 dark:text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">At eum ferri luptatum lobortis</h4>
                                                    <p className="mt-2 dark:text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Dicunt verterem evertitur eu sea</h4>
                                                    <p className="mt-2 dark:text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                        <Image src={Firewall} alt="Firewall" className="mx-auto rounded-lg " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-24'>
                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Companies</h3>
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
                                                <p className="mt-2 dark:text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
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
                                                <p className="mt-2 dark:text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
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
                                                <p className="mt-2 dark:text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                    <Image src={Companies} alt="companies"/>
                                </div>
                            </div>
                            <div className='pt-24'>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <h3 className="text-3xl font-bold tracking-tight sm:text-5xl dark:text-gray-900">Schools & Institutions</h3>
                                        <p className="mt-3 text-lg dark:text-gray-900">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 text-black">Tokens</h4>
                                                    <p className="mt-2 dark:text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 text-black">Certificates & applications with Blockchain</h4>
                                                    <p className="mt-2 dark:text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
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
                                                    <h4 className="text-lg font-medium leading-6 text-black">Web development </h4>
                                                    <p className="mt-2 text-base text-gray-800">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                        <Image src={Schools} alt="Schools" className="mx-auto rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
            </section>
        </div>
        <section>
            <PreFooter />
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

