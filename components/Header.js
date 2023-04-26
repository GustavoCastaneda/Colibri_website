import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  XMarkIcon,
  ClipboardDocumentIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants'
import Image from 'next/image';
import Link from 'next/link'
import { motion } from "framer-motion";
import { navVariants, } from '../utils/motion';





const solutions = [
  {
    name: 'Companies',
    description: 'Blockchain Solutions for companies: Smart Contracts, DeApps, Web development',
    href: '/solutions.html',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Schools & Institutions',
    description: 'Tokens, certificates and aplications with Blockchain technology to make them more secure.',
    href: '/solutions.html',
    icon: AcademicCapIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '/solutions', icon: ShieldCheckIcon },
  {
    name: 'NFT´S',
    description: "SmartContracts, Nft minitng site, Blockchain Consulting and everything you need to launch your collection.",
    href: '/solutions.html',
    icon: RocketLaunchIcon,
  },
  
]
const services = [
    {
      name: 'Smart Contracts',
      description: 'We can create any contract that you want iside the blockchain.',
      href: '/services.html',
      icon:ClipboardDocumentIcon,
    },
    {
      name: 'Web Development',
      description: 'Web3 Integrations, Mobile Responsiveness, Minting Pages, Landing Pages, E-commerce',
      href: '/services.html',
      icon: GlobeAltIcon,
    },
    
    {
      name: 'Tokens and Centificates',
      description: "With the Smart Contract technology we can create certificates that can live inside Blockchain, like COVID vaccine certificates, graduation certificates, etc. ",
      href: '/services.html',
      icon: DocumentCheckIcon,
    },

    {
        name: 'Blockchain Consulting',
        description: "Let us help you answer the most complicate questions you may have, and help you to execute the most dificul challenges",
        href: '/services.html',
        icon: CubeTransparentIcon,
      },

    {
    name: 'NFT´s',
    description: "Let us help you to launch your next NFT collection with the most professional developers",
    href: '/services.html',
    icon: RocketLaunchIcon,
    },  
    
  ]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '/services.html',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '/services.html',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '/services.html',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <motion.nav 
      variants={ navVariants }
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'flase', amount: 0.25 }}
    >
      <Popover className="relative">
        <div className="mx-auto lg:px-5 md:px-1 px-4">
          <div className=" flex items-center justify-between  py-6  md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Colibri Logo</span>
                <div className="sm:h-12 w-48">
                      <Image
                      src="https://imgcolibweb.s3.us-west-1.amazonaws.com/logo-header.webp"
                      alt="Colibri Logo"
                      width={192}
                      height={48}
                      className="w-[192px] h-[48px]"

                      />
                </div>
              </a>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="mr-5 mt-1 inline-flex items-center justify-center rounded-md bg-white pl-1 pt-2 pb-2 pr-3  text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 15 24" fill="currentColor">
                  <path d="M1 3H39C39.5523 3 40 3.44772 40 4C40 4.55228 39.5523 5 39 5H1C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3ZM1 11H39C39.5523 11 40 11.4477 40 12C40 12.5523 39.5523 13 39 13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11ZM1 19H39C39.5523 19 40 19.4477 40 20C40 20.5523 39.5523 21 39 21H1C0.447715 21 0 20.5523 0 20C0 19.4477 0.447715 19 1 19Z"/>
                  </svg>
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 lg:space-x-20 xl:space-x-32 md:space-x-10 lg:flex mt-3">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-900',
                        'group inline-flex items-center text-lg rounded-md  font-medium hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-900',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>


                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-blue-500 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-900',
                        'group inline-flex items-center rounded-md text-lg font-medium hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-900',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>


                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {services.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              

              
              <a href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700">
                Carrers
              </a>

                              


              <Popover className="relative ">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-900',
                        'group inline-flex items-center rounded-md text-lg font-medium hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-900',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                  <li key={post.id} className="truncate text-base">
                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            





            <div className="hidden items-center justify-end lg:flex md:flex-1 lg:w-0 mt-3">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-gray-900">
                About us
              </a>
              <a
                href="/contact.html"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-20 inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://imgcolibweb.s3.us-west-1.amazonaws.com/logo-header.webp"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {services.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Contact
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      About us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </motion.nav>
  )
}