import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <Container onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

export default Button;
