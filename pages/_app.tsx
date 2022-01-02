import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import '../styles/types.scss';
import { Loading } from 'components';

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <Component {...pageProps} />;
};

export default App;
