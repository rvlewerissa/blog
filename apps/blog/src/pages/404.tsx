import Link from 'next/link';
import Head from '../layout/Head';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';

export default function Custom404() {
  return (
    <div className='bg-gray-800 overflow-hidden'>
      <Head />

      <div className='py-16 sm:py-24 px-4 sm:px-8'>
        <div className='relative max-w-lg mx-auto lg:max-w-5xl text-center'>
          {/* Large 404 */}
          <div className='mb-8'>
            <h1 className='text-8xl sm:text-9xl font-black text-gray-700/50 leading-none'>
              404
            </h1>
          </div>

          {/* Error message */}
          <div className='mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Page Not Found
            </h2>
            <p className='text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto'>
              Sorry, the page you&apos;re looking for doesn&apos;t exist. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link href='/' passHref>
              <a className='inline-flex items-center px-6 py-3 bg-sky-900/20 text-sky-300 hover:bg-sky-800/30 hover:text-sky-200 transition-all duration-300 font-medium rounded-lg border border-sky-800/30 hover:border-sky-700/50'>
                <svg
                  className='mr-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                Go Home
              </a>
            </Link>

            <Link href='/projects' passHref>
              <a className='inline-flex items-center px-6 py-3 bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 hover:text-white transition-all duration-300 font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50'>
                <svg
                  className='mr-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
                View Projects
              </a>
            </Link>
          </div>

          {/* Additional help */}
          <div className='mt-12 pt-8 border-t border-gray-700/50'>
            <p className='text-sm text-gray-400'>
              Looking for something specific? Try navigating from the{' '}
              <Link href='/' passHref>
                <a className='text-sky-400 hover:text-sky-300 transition-colors'>
                  homepage
                </a>
              </Link>{' '}
              or check out my{' '}
              <Link href='/projects' passHref>
                <a className='text-sky-400 hover:text-sky-300 transition-colors'>
                  projects
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
