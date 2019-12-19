import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SubTitle({ children }) {
  return <Container>{children}</Container>;
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
