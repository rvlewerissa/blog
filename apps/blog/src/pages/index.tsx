import Head from '../layout/Head';
import Header from '../components/LandingPage/Header';
import ContactMe from '../components/LandingPage/ContactMe';
import FeaturedWork from '../components/LandingPage/FeaturedWork';
import Projects from '../components/LandingPage/Projects';
import WorkshopAndEvents from '../components/LandingPage/WorkshopAndEvents';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className='bg-gray-800 min-h-screen overflow-hidden'>
      <Head />
      <Header />
      <FeaturedWork />
      <Projects />
      <WorkshopAndEvents />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
