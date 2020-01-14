import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function SubTitle({ children, className }) {
  return <Container className={className}>{children}</Container>;
}

SubTitle.defaultProps = {
  className: '',
};

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SubTitle;
