import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestPost from '../components/LatestPost';
import ContactMe from '../components/ContactMe';

const Home: NextPage = () => {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <Head>
        <title>Vitto Lewerissa</title>
        <meta name='description' content='Personal blog by Vitto Lewerissa' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <LatestPost />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
