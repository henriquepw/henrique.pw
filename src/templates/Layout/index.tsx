import React, { FC } from 'react';

import SEO from '~/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

interface Props {
  title?: string;
  className?: string;
}

const Layout: FC<Props> = ({ children, className, title }) => (
  <Container className={className}>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </Container>
);

Layout.defaultProps = {
  className: '',
  title: 'Home | ',
};

export default Layout;
