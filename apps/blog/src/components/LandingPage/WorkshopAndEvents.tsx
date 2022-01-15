export default function WorkshopAndEvents() {
  return (
    <div className='py-8 sm:pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-800 lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Workshops &amp; Events
          </h2>
          <p className='text-gray-200 mt-2 md:mt-2 font-mdedium text-md md:text-lg'>
            Occasionally, I did some workshops and events, although I
            wasn&apos;t doing much lately.
          </p>
        </div>
        <div className='pt-8 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8'>
          <div>
            <div className='w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <img
                src='/bptn-workshop.png'
                alt='BTPN and Jenius team workshop'
                className='w-full h-full object-center object-cover'
              />
            </div>
            <p className='mt-4 lg:mt-8 text-base text-gray-300'>
              Me and 2 of my colleagues did a{' '}
              <span className='italic'>full week</span> workshop on React for{' '}
              <a
                href='https://www.btpn.com/'
                target='_blank'
                rel='noreferrer'
                className='text-sky-500'
              >
                BTPN
              </a>{' '}
              and{' '}
              <a
                href='https://www.jenius.com/'
                target='_blank'
                rel='noreferrer'
                className='text-sky-500'
              >
                Jenius
              </a>{' '}
              team.
            </p>
          </div>
          <div>
            <div className='w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <img
                src='/tech-in-asia-conference.png'
                alt='Zumi x Kodefox in Tech in Asia Conference'
                className='w-full h-full object-center object-cover'
              />
            </div>
            <p className='mt-4 lg:mt-8 text-base text-gray-300'>
              Me and my colleagues went to Tech in Asia to represent{' '}
              <a
                href='https://www.zumiapp.com/'
                target='_blank'
                rel='noreferrer'
                className='text-sky-500'
              >
                Zumi
              </a>{' '}
              (a Kodefox made app) in Tech in Asia Conference!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
