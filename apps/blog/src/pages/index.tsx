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
        <meta
          property='og:title'
          content={`Vitto Lewerissa's personal website`}
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dyiamdse5/image/upload/v1642286968/blog-og_fe3smt.png'
        />
        <meta property='og:url' content='https://www.vittolewerissa.com' />
        <meta
          name='description'
          content={`Vitto Lewerissa's personal website`}
        />
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
