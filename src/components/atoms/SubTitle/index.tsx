import React from 'react';

import { Container } from './styles';

interface SubTitleProps {
  children: string;
  className?: string;
}

// TODO: animate this components

const SubTitle: React.FC<SubTitleProps> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default SubTitle;
