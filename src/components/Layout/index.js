import React from 'react';
import PropTypes from 'prop-types';

import SEO from '~/components/seo';

import GlobalStyle from '~/styles/global';
import { Container } from './styles';

function Layout({ children, className, title }) {
  return (
    <Container className={className}>
      <GlobalStyle />
      <SEO title={title} />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
