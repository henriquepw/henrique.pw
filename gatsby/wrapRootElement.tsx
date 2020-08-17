import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ApolloProvider } from '@apollo/client';

import { PageHeightProvider } from '../src/hooks/usePageHeight';
import apolloClient from '../src/services/ApolloClient';
import { light } from '../src/styles/themes';

interface WrapRootProps {
  element: React.ReactNode;
}
/**
 * A wrapper for the pages with all provider needed
 */
export const wrapRootElement: React.FC<WrapRootProps> = ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={light}>
      <PageHeightProvider>{element}</PageHeightProvider>
    </ThemeProvider>
  </ApolloProvider>
);
