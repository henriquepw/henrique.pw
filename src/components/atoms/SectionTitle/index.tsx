import React from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  isRight?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, isRight }) => {
  return <Container isRight={isRight}>{children}</Container>;
};

export default SectionTitle;
