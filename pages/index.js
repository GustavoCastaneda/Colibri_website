import Head from 'next/head'
import Image from 'next/image';
import Header from '../components/Header.js'
import Main from '../components/Main.js'
import CtaSection from '../components/CtaSection.js'
import Feature from '../components/Feature.js'
import Footer from '../components/Footer.js'
import PreFooter from '../components/PreFooter.js'
import Blogs from '../components/Blogs.js'
import Feature2 from '../components/Feature2.js'
import Feature3 from '../components/Feature3.js'
import ParticleAnimation from '../components/Particles.js'
import React, { lazy, Suspense } from 'react';


export default function Home() {
  return (
       <div>
          <Head>
            <title>Colibri web 3.0</title>
          </Head>
          <div className='bg-gradient-to-t to-white via-blue-200 from-blue-300'>
            <Header />
              <main className='lg:pt-20 pt-10'>
                <Main />
              </main>
              <section className='lg:pt-16 pt-5'>
                    <CtaSection />
              </section>
              <section>
                
              </section>
              <section className='lg:pt-24 pt-10'>
                <Feature2 />
              </section>
          </div>
        <div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#93C4FD" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,176C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                  </svg>
              </div>
              <section>
                  <Feature />
              </section>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#f5f5f5" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,80C1120,85,1280,171,1360,213.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
              </div>
              <div className="bg-gradient-to-b from-neutral-100 via-indigo-200 to-blue-200">
                <section className='pb-24'>
                   <Feature3 />
                </section>
                <section className='pt-24 pb-16'>
                    <Blogs />
                </section>
              </div>   
              
        </div>
       
        <section>
          <PreFooter />
        </section>
        <footer>
          <Footer />
        </footer>
       </div>
  )
}
