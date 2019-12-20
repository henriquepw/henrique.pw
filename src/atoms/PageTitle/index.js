import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function PageTitle({ title }) {
  return <Container>{title}</Container>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
