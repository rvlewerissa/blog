import Head from 'next/head';

import Navigation from '../../components/Navigation';

export default function Blog() {
  return (
    <div className='relative pt-8 pb-10 lg:pb-24 bg-gray-800 min-h-screen'>
      <Head>
        <title>Vitto Lewerissa</title>
        <meta name='description' content='Personal blog by Vitto Lewerissa' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
    </div>
  );
}
