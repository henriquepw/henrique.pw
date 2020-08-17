import React from 'react';

import { AnimationControls } from 'framer-motion';

import { Container } from './styles';

const animationVariants = {
  show: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hide: {
    y: 30,
    opacity: 0,
  },
};

interface TitleProps {
  animateDelay?: number;
  animationControl: AnimationControls;
  children: string;
}

const Title: React.FC<TitleProps> = ({
  animateDelay = 0.2,
  animationControl,
  children,
}) => {
  return (
    <Container
      animate={animationControl}
      custom={animateDelay}
      variants={animationVariants}
    >
      {children}
    </Container>
  );
};

export default Title;
