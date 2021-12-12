import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Router from 'next/router';
import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import '../styles/types.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return getLayout(<Component {...pageProps} />);
};

export default App;
