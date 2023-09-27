import Head from 'next/head'
import Image from 'next/image';
import HeaderEs from '../components/HeaderEs.js'
import MainEs from '../components/MainEs.js'
import CtaSectionEs from '../components/CtaSectionEs.js'
import FeatureEs from '../components/FeatureEs.js'
import Footer from '../components/Footer.js'
import PreFooter from '../components/PreFooter.js'
import Blogs from '../components/Blogs.js'
import Feature2Es from '../components/Feature2Es.js'
import Feature3Es from '../components/Feature3Es.js'
import React, { lazy, Suspense } from 'react';


export default function es() {
  return (
       <div>
          <Head>
            <title>Colibri Blockchain Services-Web 3.0 Solutions</title>
          </Head>
          <div className='bg-gradient-to-t to-white via-blue-200 from-blue-300'>
            <HeaderEs />
              <main className='lg:pt-20 pt-10'>
                <MainEs />
              </main>
              <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#ffffff"></stop><stop offset="95%" stop-color="#0693e3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 86.11954654757815,102.62624527653728 172.2390930951563,72.25249055307454 230,88 C 287.7609069048437,103.74750944692546 317.1631741669529,165.6162830642391 388,163 C 458.8368258330471,160.3837169357609 571.108210237032,93.2823771899691 654,86 C 736.891789762968,78.7176228100309 790.4039848849192,131.25420817588457 844,143 C 897.5960151150808,154.74579182411543 951.2758502232912,125.70079010649263 1009,131 C 1066.7241497767088,136.29920989350737 1128.4926142219167,175.94263139814495 1201,182 C 1273.5073857780833,188.05736860185505 1356.7536928890418,160.52868430092752 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#ffffff"></stop><stop offset="95%" stop-color="#0693e3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 51.429062177945724,275.60769495018894 102.85812435589145,285.2153899003779 179,282 C 255.14187564410855,278.7846100996221 355.9965647543799,262.7461353486774 432,257 C 508.0034352456201,251.2538646513226 559.1556166265889,255.8000687049124 623,271 C 686.8443833734111,286.1999312950876 763.3809687392649,312.0535898316729 842,312 C 920.6190312607351,311.9464101683271 1001.3205084163517,285.98557196839573 1056,271 C 1110.6794915836483,256.01442803160427 1139.336997595328,252.0041222947441 1199,253 C 1258.663002404672,253.9958777052559 1349.3315012023359,259.99793885262795 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
              </div>
              <section className=' bg-white'>
                    <CtaSectionEs />
              </section>
              <section>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#ffffff"></stop><stop offset="95%" stop-color="#0693e3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 77.34661628306426,133.40810717966335 154.69323256612853,133.8162143593267 213,138 C 271.30676743387147,142.1837856406733 310.57368601855023,150.1432497423566 379,142 C 447.42631398144977,133.8567502576434 545.0120233596703,109.61078667124698 633,117 C 720.9879766403297,124.38921332875302 799.3782205427689,163.41360357265546 856,171 C 912.6217794572311,178.58639642734454 947.4750944692546,154.73479903813123 1005,153 C 1062.5249055307454,151.26520096186877 1142.7214015802128,171.64720027481962 1219,172 C 1295.2785984197872,172.35279972518038 1367.6392992098936,152.6763998625902 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stop-color="#ffffff"></stop><stop offset="95%" stop-color="#0693e3"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 59.942287873582956,259.5204397114394 119.88457574716591,253.04087942287873 185,251 C 250.1154242528341,248.95912057712127 320.40398488491934,251.3569220199244 390,254 C 459.59601511508066,256.6430779800756 528.499484713157,259.53143249742357 609,260 C 689.500515286843,260.46856750257643 781.5980762624529,258.5173479903814 849,253 C 916.4019237375471,247.48265200961865 959.1082102370319,238.3991755410512 1018,229 C 1076.891789762968,219.6008244589488 1151.9690827894194,209.88594984541396 1225,216 C 1298.0309172105806,222.11405015458604 1369.0154586052904,244.05702507729302 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
              </section>
              <section className=''>
                <Feature2Es />
              </section>
          </div>
        <div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#93C4FD" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,176C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                  </svg>
              </div>
              <section>
                  <FeatureEs />
              </section>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#f5f5f5" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,80C1120,85,1280,171,1360,213.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
              </div>
              <div className="bg-gradient-to-b from-neutral-100 via-indigo-200 to-blue-200">
                <section className='pb-24'>
                   <Feature3Es />
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
