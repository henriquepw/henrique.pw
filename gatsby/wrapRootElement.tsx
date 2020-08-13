import React from 'react';

import { ApolloProvider } from '@apollo/client';

import { SectionsProvider } from '../src/hooks/sections';
import apolloClient from '../src/services/ApolloClient';

interface WrapRootProps {
  element: React.ReactNode;
}

export const wrapRootElement: React.FC<WrapRootProps> = ({ element }) => (
  <SectionsProvider>
    <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
  </SectionsProvider>
);
