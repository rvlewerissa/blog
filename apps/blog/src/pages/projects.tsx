import Head from 'next/head';

import Navigation from '../components/Navigation';

export default function Work() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <Head>
        <title>Vitto Lewerissa</title>
        <meta name='description' content='Personal blog by Vitto Lewerissa' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
        <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
          <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
            Projects
          </h1>
          <p className='text-gray-200 mt-3 md:mt-5 font-medium text-md md:text-lg'>
            I am currently working on my secret side hustle.
          </p>
        </div>
      </div>
    </div>
  );
}
