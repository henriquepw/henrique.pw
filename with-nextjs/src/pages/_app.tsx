import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';

import Toast from '@/components/atoms/Toast';
import Menu from '@/components/molecules/Menu';
import AppProvider from '@/components/templates/AppProvider';

import GlobalStyle from '@/styles/global';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Toast />
    </AppProvider>
  );
}

export default MyApp;
