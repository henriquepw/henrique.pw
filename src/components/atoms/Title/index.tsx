import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

import { useSections } from '~/hooks/sections';

import { Container } from './styles';

const variants = {
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

interface Props {
  animateDelay?: number;
  children: string;
}

const Title: React.FC<Props> = ({ children, animateDelay = 0.2 }) => {
  const { selected } = useSections();
  const controls = useAnimation();

  useEffect(() => {
    controls.start(selected === children.toLowerCase() ? 'visible' : 'hidden');
  }, [controls, selected, children]);

  return (
    <Container custom={animateDelay} animate={controls} variants={variants}>
      {children}
    </Container>
  );
};

export default Title;
