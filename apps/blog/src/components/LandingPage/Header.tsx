import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className='relative overflow-hidden'>
      <img
        src='/cool-background.svg'
        alt=''
        className='absolute -top-24 lg:-top-0 lg:-right-80 h-full opacity-10'
      />
      <div className='relative pb-10 lg:pb-24'>
        <Navigation />
        <main className='mt-0 px-4 sm:px-8 sm:mt-24'>
          <div className='mx-auto max-w-lg lg:max-w-5xl flex flex-col lg:flex-row lg:items-center'>
            <div className='order-last lg:order-first max-w-md'>
              <h1 className='text-4xl lg:text-6xl tracking-tight font-black text-white'>
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
              className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-12 md:ml-12 md:mt-0 shrink-0 puff-in-center bg-gradient-to-r from-sky-200 via-neutral-300 to-slate-400 rounded-full'
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
          </div>
        </main>
      </div>
    </div>
  );
}
