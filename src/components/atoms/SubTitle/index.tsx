import React from 'react';

import { Container } from './styles';

interface SubTitleProps {
  children: string;
  className?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default SubTitle;
