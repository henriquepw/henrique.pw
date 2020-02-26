import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';

import { client } from '../src/context/ApolloContext';
import { SectionsProvider } from '../src/context/SectionsContext';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: FC<Props> = ({ element }) => (
  <HelmetProvider>
    <SectionsProvider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </SectionsProvider>
  </HelmetProvider>
);
