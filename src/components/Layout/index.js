import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '~/styles/global';
import { Container } from './styles';

function Layout({ children, className }) {
  return (
    <Container className={className}>
      <GlobalStyle />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
