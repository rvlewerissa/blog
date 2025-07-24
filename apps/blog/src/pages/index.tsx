import Head from '../layout/Head';
import Header from '../components/LandingPage/Header';
import ContactMe from '../components/LandingPage/ContactMe';
import FeaturedWork from '../components/LandingPage/FeaturedWork';
import WorkshopAndEvents from '../components/LandingPage/WorkshopAndEvents';

const Home = () => {
  return (
    <div className='bg-gray-800 min-h-screen overflow-hidden'>
      <Head />
      <Header />
      <FeaturedWork />
      <WorkshopAndEvents />
      <ContactMe />
    </div>
  );
};

export default Home;
