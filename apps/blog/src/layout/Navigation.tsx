import { Fragment } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Work', href: '/#work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact me', href: '/#contact-me' },
];

export default function Navigation() {
  return (
    <Popover>
      <div className='pt-8 max-w-7xl mx-auto px-6 sm:px-6'>
        <nav
          className='flex items-center justify-between sm:h-10 lg:justify-center relative max-w-lg mx-auto lg:max-w-5xl'
          aria-label='Global'
        >
          <div className='flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
              <Link href='/' passHref>
                <a className='tracking-wider uppercase font-bold text-sm lg:text-lg text-white'>
                  Vitto Lewerissa
                </a>
              </Link>
              <div className='-mr-2 flex items-center lg:hidden'>
                <Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex lg:space-x-12'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <a className='font-medium text-md text-white hover:text-gray-300'>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <MobileNavigation />
    </Popover>
  );
}

function MobileNavigation() {
  return (
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
        className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
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
                <span
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer'
                  onClick={() => {
                    // TODO: need to close drawer when we click a link
                  }}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
