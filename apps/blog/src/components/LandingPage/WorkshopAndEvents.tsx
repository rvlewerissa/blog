export default function WorkshopAndEvents() {
  return (
    <div id='workshops' className='py-8 sm:pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-800 lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Workshops &amp; Events
          </h2>
        </div>
        <div className='pt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12'>
          <div className='bg-gray-700 border-gray-700 border-2 rounded-lg p-6'>
            <div className='w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden mb-6'>
              <img
                src='/bptn-workshop.png'
                alt='BTPN and Jenius team workshop'
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold text-white mb-3'>
                React Workshop for BTPN & Jenius Team
              </h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-3 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'>
                  Full Week Workshop
                </span>
                <span className='px-3 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'>
                  Kodefox
                </span>
              </div>
              <p className='text-gray-300 leading-relaxed flex-1'>
                Together with 2 of my colleagues, I delivered an intensive full
                week React workshop for the development teams at{' '}
                <a
                  href='https://www.btpnsyariah.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300'
                >
                  BTPN
                </a>{' '}
                and{' '}
                <a
                  href='https://www.jenius.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300'
                >
                  Jenius
                </a>
                . The training covered fundamental React concepts, state
                management patterns, and hands-on project development with
                practical coding exercises.
              </p>
            </div>
          </div>
          <div className='bg-gray-700 border-gray-700 border-2 rounded-lg p-6'>
            <div className='w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden mb-6'>
              <img
                src='/tech-in-asia-conference.png'
                alt='Zumi x KodeFox in Tech in Asia Conference'
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Tech in Asia Conference
              </h3>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-3 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'>
                  Conference
                </span>
                <span className='px-3 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'>
                  Kodefox
                </span>
              </div>
              <p className='text-gray-300 leading-relaxed flex-1'>
                Alongside my colleagues from KodeFox, I represented Zumi at the{' '}
                <a
                  href='https://conference.techinasia.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300'
                >
                  Tech in Asia Conference
                </a>
                . We showcased our mobile application to industry leaders,
                investors, and fellow developers, demonstrating the app&apos;s
                features and gaining valuable exposure in Southeast Asia&apos;s
                tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
