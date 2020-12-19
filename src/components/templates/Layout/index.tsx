import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';

import { Container } from './styles';

interface LayoutProps {
  seo: SEOProps;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, seo }) => {
  return (
    <Container className={className}>
      <SEO {...seo} />
      {children}
    </Container>
  );
};

export default Layout;
