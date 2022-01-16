import Head from './Head';
import Navigation from './Navigation';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='bg-gray-800 min-h-screen overflow-hidden'>
      <Head />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
