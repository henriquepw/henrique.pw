import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';

import PropTypes from 'prop-types';

import { client } from '../src/context/ApolloContext';
import { SectionsProvider } from '../src/context/SectionsContext';

export const wrapRootElement = ({ element }) => (
  <HelmetProvider>
    <SectionsProvider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </SectionsProvider>
  </HelmetProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
