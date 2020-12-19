import React from 'react';

import { AppProps } from 'next/app';

import AppProvider from '@/components/templates/AppProvider';
import Layout from '@/components/templates/Layout';

import GlobalStyle from '@/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
