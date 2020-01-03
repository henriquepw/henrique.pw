import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import PropTypes from 'prop-types';

import { SectionsProvider } from '../src/context/sectionsContext';

export const wrapRootElement = ({ element }) => (
  <HelmetProvider>
    <SectionsProvider>{element}</SectionsProvider>
  </HelmetProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
