import React, { useEffect } from 'react';

import { useRouter } from 'next/dist/client/router';

import SEO, { SEOProps } from '@/components/atoms/SEO';
import Menu from '@/components/molecules/Menu';

import { Container } from './styles';

interface LayoutProps {
  seo: SEOProps;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, seo, className }) => {
  return (
    <>
      <SEO {...seo} />
      <Container className={className}>
        <Menu />
        {children}
      </Container>
    </>
  );
};

export default Layout;
