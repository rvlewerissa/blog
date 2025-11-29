import Navigation from '../../layout/Navigation';

export default function Header() {
  return (
    <div className='relative overflow-hidden'>
      <div
        className='absolute inset-0 opacity-30 animate-float [mask-image:linear-gradient(to_bottom,black_20%,transparent)]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40h40M40 0v40' stroke='%230ea5e9' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className='relative pb-10 lg:pb-24'>
        <Navigation />
        <main className='mt-0 px-4 sm:px-8 sm:mt-24'>
          <div className='mx-auto max-w-lg lg:max-w-5xl flex flex-col lg:flex-row lg:items-center'>
            <div className='order-last lg:order-first max-w-md'>
              <h1 className='text-4xl lg:text-6xl tracking-tight font-black text-white'>
                <span className='block leading-snug slide-in-bottom'>
                  <span className='wave mr-2'>👋🏼 </span> Hi, I&apos;m{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300'>
                    Vitto
                  </span>
                  .
                </span>
              </h1>
              <h2 className='block leading-snug text-white font-bold font-display text-lg sm:text-xl lg:text-2xl mt-3 md:mt-2 slide-in-bottom slide-in-bottom-2'>
                Senior Software Engineer. Crafting high-quality, scalable
                applications.
              </h2>
              <p className='text-gray-200 mt-3 md:mt-5 text-md font-light md:text-xl slide-in-bottom-2'>
                Specializing in React, TypeScript, and modern web technologies.
                Based in Indonesia, delivering world-class solutions for 8+
                years.
              </p>
              <div className='flex flex-wrap items-center gap-4 mt-6 md:mt-8 slide-in-bottom-2'>
                <div className='inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10'>
                  <span className='mr-2 text-lg'>📍</span>
                  <span className='text-gray-200 text-sm md:text-base font-medium'>
                    Bali, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className='relative mt-6 mb-8 ml-4 sm:mr-8 self-start lg:mt-12 md:ml-12 md:mt-0 shrink-0 puff-in-center'>
              <div className='w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-96 lg:h-96 relative rounded-full border-2 border-sky-500/20 shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] overflow-hidden'>
                <img
                  src='/profile-picture.jpg'
                  alt='Vitto Lewerissa'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
