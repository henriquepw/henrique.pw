import React, { FC } from 'react';

import { ApolloProvider } from '@apollo/client';

import { client } from '../src/context/ApolloContext';
import { SectionsProvider } from '../src/context/SectionsContext';

interface WrapRootProps {
  element: React.ReactNode;
}

export const wrapRootElement: FC<WrapRootProps> = ({ element }) => (
  <SectionsProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </SectionsProvider>
);
