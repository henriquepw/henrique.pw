import React from 'react';

import { AppProps } from 'next/app';

import Menu from '@/components/molecules/Menu';
import AppProvider from '@/components/templates/AppProvider';

import GlobalStyle from '@/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
