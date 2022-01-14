import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Work', href: '/work' },
  { name: 'Contact me', href: 'mailto:rvlewerissa@gmail.com' },
];

export default function Header() {
  return (
    <div className='relative bg-gray-800 overflow-hidden'>
      <img
        src='/cool-background.svg'
        alt=''
        className='absolute w-full -right-80 h-full opacity-10'
      />
      <div className='relative pt-12 pb-16 sm:pb-24'>
        <Popover>
          <div className='max-w-7xl mx-auto px-6 sm:px-6'>
            <nav
              className='relative flex items-center justify-between sm:h-10 md:justify-center'
              aria-label='Global'
            >
              <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <Link href='/' passHref>
                    <span className='tracking-wider uppercase font-bold text-sm lg:text-lg text-white'>
                      Vitto Lewerissa
                    </span>
                  </Link>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex md:space-x-12'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='font-bold text-md text-white hover:text-gray-300'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <span className='tracking-wider uppercase font-bold text-sm lg:text-lg'>
                      Vitto Lewerissa
                    </span>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <span className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className='mt-0 mx-auto max-w-5xl px-4 sm:mt-24 flex flex-col sm:flex-row justify-center items-center'>
          <div className='order-last md:order-first max-w-md'>
            <h1 className='text-3xl tracking-tight font-black text-white sm:text-4xl lg:text-6xl'>
              <span className='block leading-snug slide-in-bottom'>
                <span className='wave mr-2'>👋🏼 </span> Hi, I&apos;m{' '}
                <span>Vitto</span>.
              </span>
            </h1>
            <h2 className='block leading-snug text-white font-bold text-lg sm:text-xl lg:text-2xl mt-3 md:mt-2 slide-in-bottom slide-in-bottom-2'>
              I try to make the world better by making quality software.
            </h2>
            <p className='text-gray-200 mt-3 md:mt-5 font-light text-md md:text-xl slide-in-bottom-2'>
              Previously worked at{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://kodefox.com/'
                className='font-bold text-sky-500'
              >
                Kodefox{' '}
              </a>
              for a few years.
              <br />
              Now I help build software at a new startup called{' '}
              <span className='font-bold text-sky-500'>GDIS</span>.
            </p>
          </div>

          <div
            className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-12 md:ml-12 md:mt-0 shrink-0 puff-in-center bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] rounded-full'
            style={{
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }}
          >
            <img
              src='/me.jpeg'
              alt=''
              className='absolute object-cover rounded-full left-0.5 top-0.5 md:left-1 md:top-1 lg:left-1.5 lg:top-1.5'
              style={{
                width: '97%',
                height: '97%',
              }}
            />
            <div
              className='absolute left-0.5 top-0.5 md:left-1 md:top-1 lg:left-1.5 lg:top-1.5 bg-blue-200 mix-blend-multiply rounded-full'
              style={{ width: '97%', height: '97%' }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
