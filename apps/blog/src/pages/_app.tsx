import Layout from '../layout';
import useGlobalCursorGlow from '../hooks/useGlobalCursorGlow';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  useGlobalCursorGlow();
  
  // had an issue with adjusting the hero SVG, hence this had to be done
  const isHome = router.pathname === '/';
  if (isHome) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
