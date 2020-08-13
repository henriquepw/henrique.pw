import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ApolloProvider } from '@apollo/client';

import { SectionsProvider } from '../src/hooks/sections';
import apolloClient from '../src/services/ApolloClient';
import { light } from '../src/styles/themes';

interface WrapRootProps {
  element: React.ReactNode;
}
/**
 * A wrapper for the pages with all provider needed
 */
export const wrapRootElement: React.FC<WrapRootProps> = ({ element }) => (
  <SectionsProvider>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={light}>{element}</ThemeProvider>
    </ApolloProvider>
  </SectionsProvider>
);
