import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function ContactMe() {
  return (
    <div className='bg-gray-800' id='contact-me'>
      <div className='max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='text-2xl font-extrabold sm:text-4xl'>
          <span className='block text-white'>Get in touch with me!</span>
        </h2>
        <p className='text-xl font-light sm:text-2xl mt-2'>
          <span className='block text-white'>
            You can reach me through my email.
          </span>
        </p>
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
  );
}
