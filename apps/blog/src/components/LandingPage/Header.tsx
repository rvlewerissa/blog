import Navigation from '../../layout/Navigation';

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
                I’m a Front-End Engineer with 8+ years of experience based in
                Indonesia.
              </h2>
              <p className='text-gray-200 mt-3 md:mt-5 text-md font-light md:text-xl slide-in-bottom-2'>
                I have extensive experience working in agile environments,
                developing scalable applications with technologies including
                React.js, TypeScript, Next.js, and GraphQL.
              </p>
              <p className='text-gray-200 mt-3 md:mt-5 text-md font-light md:text-xl slide-in-bottom-2'>
                I&apos;m passionate about owning the complete product journey
                from concept to launch, creating meaningful impact through
                well-built products, and maintaining clean architecture with
                sustainable, maintainable code practices.
              </p>
              <p className='text-gray-200 mt-3 md:mt-5 text-md font-light md:text-xl slide-in-bottom-2'>
                Previously worked at{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://tiptip.id/'
                  className='font-medium text-sky-600'
                >
                  TipTip
                </a>
                ,{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://kodefox.com/'
                  className='font-medium text-sky-600'
                >
                  KodeFox
                </a>
                , and{' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://phantom.sh'
                  className='font-medium text-sky-600'
                >
                  Phantom Network
                </a>
                .
              </p>
            </div>

            <div
              className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-12 md:ml-12 md:mt-0 shrink-0 puff-in-center bg-gradient-to-r from-amber-500 to-orange-600 rounded-full'
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
              {/* Open to Work Badge */}
              <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 sm:-bottom-2 lg:-bottom-3'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-emerald-700 rounded-full blur-sm opacity-75'></div>
                  <div className='relative bg-emerald-700 text-white text-[8px] sm:text-[10px] lg:text-sm font-bold px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 rounded-full shadow-lg'>
                    <div className='flex items-center gap-0.5 sm:gap-1 lg:gap-1.5'>
                      <div className='w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1.5 lg:h-1.5 bg-white/70 rounded-full animate-pulse'></div>
                      <span>Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
