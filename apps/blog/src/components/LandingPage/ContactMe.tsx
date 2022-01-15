import { ExternalLinkIcon, MailIcon } from '@heroicons/react/solid';

export default function ContactMe() {
  return (
    <div className='bg-gray-800' id='contact-me'>
      <div className='py-16 sm:py-0'>
        <div className='relative sm:py-16'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20'>
              <div
                aria-hidden='true'
                className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
              >
                <svg
                  className='absolute inset-0 h-full w-full'
                  preserveAspectRatio='xMidYMid slice'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 1463 360'
                >
                  <path
                    className='text-gray-500 text-opacity-40'
                    fill='currentColor'
                    d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
                  />
                  <path
                    className='text-gray-700 text-opacity-40'
                    fill='currentColor'
                    d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
                  />
                </svg>
              </div>
              <div className='relative'>
                <div className='sm:text-center'>
                  <h2 className='text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
                    <MailIcon className='w-11 h-11 -mt-1 inline mr-2' />
                    Let&apos;s get in touch.
                  </h2>
                  <p className='mt-6 mx-auto max-w-2xl text-lg text-gray-200'>
                    Feel free to reach me through my email or slip in DMs on any
                    of my social network.
                  </p>
                </div>
                <div className='sm:mx-auto sm:max-w-lg sm:flex sm:justify-center'>
                  <a
                    href='mailto:rvlewerissa@gmail.com'
                    className='transition-colors duration-300 mt-8 w-full inline-flex items-center justify-center py-3 px-8 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-800 hover:bg-gray-300 sm:w-auto'
                  >
                    <span>Contact me</span>
                    <ExternalLinkIcon
                      className='ml-3 h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
