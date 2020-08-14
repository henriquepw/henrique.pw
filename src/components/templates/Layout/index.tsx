import React from 'react';

import SEO from '~/components/atoms/Seo';

import { Container } from './styles';
import GlobalStyle from '~/styles/global';

interface LayoutProps {
  title?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
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
