import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import LatestPost from '../components/LandingPage/LatestPost';
import ContactMe from '../components/LandingPage/ContactMe';
import FeaturedWork from '../components/LandingPage/FeaturedWork';
import WorkshopAndEvents from '../components/LandingPage/WorkshopAndEvents';

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
      <FeaturedWork />
      <WorkshopAndEvents />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
