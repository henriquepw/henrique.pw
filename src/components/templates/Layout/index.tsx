import React from 'react';

import Menu from '@/components/molecules/Menu';

import { Container } from './styles';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <Container className={className}>
      <Menu />
      {children}
    </Container>
  );
};

export default Layout;
