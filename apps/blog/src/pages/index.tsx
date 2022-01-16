import Head from '../layout/Head';
import Header from '../components/LandingPage/Header';
import LatestPost from '../components/LandingPage/LatestPost';
import ContactMe from '../components/LandingPage/ContactMe';
import FeaturedWork from '../components/LandingPage/FeaturedWork';
import WorkshopAndEvents from '../components/LandingPage/WorkshopAndEvents';
import {
  fetchSanityContent,
  GET_LATEST_POSTS,
} from '../utils/fetchSanityContent';

import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const { allPage: posts } = await fetchSanityContent({
    query: GET_LATEST_POSTS,
  });

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='bg-gray-800 min-h-screen overflow-hidden'>
      <Head />
      <Header />
      <LatestPost posts={posts} />
      <FeaturedWork />
      <WorkshopAndEvents />
      <ContactMe />
    </div>
  );
};

export default Home;
