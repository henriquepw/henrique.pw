import React from 'react';

import { Container } from './styles';

interface Props {
  children: string;
  className?: string;
}

const SubTitle: React.FC<Props> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default SubTitle;
