import React from 'react';

import Menu from '~/components/Menu';
import Home from '~/pages/Home';
import GlobalStyles from './styles/global';

export default function app() {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Home />
      <div />
    </>
  );
}
