import React from 'react';

import SEO from '~/components/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

interface Props {
  title?: string;
  className?: string;
}

const Layout: React.FC<Props> = ({
  children,
  className,
  title = 'Home | ',
}) => (
  <Container className={className}>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </Container>
);

export default Layout;
