import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  children: string;
  className?: string;
}

const SubTitle: FC<Props> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

SubTitle.defaultProps = {
  className: '',
};

export default SubTitle;
