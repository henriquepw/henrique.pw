import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

import { useSections } from '~/hooks/sections';

import { Container } from './styles';

const animationVariants = {
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hidden: {
    y: 30,
    opacity: 0,
  },
};

interface TitleProps {
  animateDelay?: number;
  children: string;
}

const Title: React.FC<TitleProps> = ({ children, animateDelay = 0.2 }) => {
  const { selected } = useSections();
  const animationControl = useAnimation();

  useEffect(() => {
    animationControl.start(
      selected === children.toLowerCase() ? 'visible' : 'hidden',
    );
  }, [animationControl, selected, children]);

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
