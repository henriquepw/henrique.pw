import React from 'react';

import SEO from '~/components/atoms/Seo';

import GlobalStyle from '~/styles/global';

interface LayoutProps {
  title?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Home | ' }) => (
  <>
    <GlobalStyle />
    <SEO title={title} />
    {children}
  </>
);

export default Layout;
