import React from 'react';

import 'typeface-raleway';
import PropTypes from 'prop-types';

import { SectionsProvider } from './src/context/sectionsContext';

export const wrapRootElement = ({ element }) => (
  <SectionsProvider>{element}</SectionsProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
