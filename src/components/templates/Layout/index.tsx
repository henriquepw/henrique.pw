import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';

import { Container } from './styles';

interface LayoutProps {
  seo: SEOProps;
  className?: string;
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, id, seo }) => {
  return (
    <Container className={className} id={id}>
      <SEO {...seo} />
      {children}
    </Container>
  );
};

export default Layout;
