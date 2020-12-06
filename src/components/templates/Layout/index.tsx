import React from 'react';

import SEO, { SEOProps } from '@/components/atoms/SEO';

import { Container } from './styles';

interface LayoutProps {
  seo: SEOProps;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, seo, className }) => {
  return (
    <>
      <SEO {...seo} />
      <Container className={className}>{children}</Container>
    </>
  );
};

export default Layout;
