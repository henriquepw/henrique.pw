import React from 'react';

import { AppProps } from 'next/app';

import AppProvider from '@/components/templates/AppProvider';

import GlobalStyle from '@/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
