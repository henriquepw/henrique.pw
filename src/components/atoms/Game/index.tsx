import React from 'react';

import { motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';

import useAnimationRef from '~/hooks/useAnimationRef';

import { Container, Image, Description } from './styles';

const animationVariants = {
  show: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hide: (delay: 0 | 0.3 = 0) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 - delay, // the inverse of the show delay
    },
  }),
};

interface GameProps {
  name: string;
  description: string;
  fluid: FluidObject | FluidObject[];
}

// TODO: Check this ref type problem
const Game: React.FC<GameProps> = ({ name, description, fluid }) => {
  const [animationControls, gameRef] = useAnimationRef<HTMLLIElement>({
    rootMargin: '0px 0px -30% 0px',
  });

  return (
    <Container ref={gameRef}>
      <Image fluid={fluid} />
      <Description>
        <motion.h1 animate={animationControls} variants={animationVariants}>
          {name}
        </motion.h1>
        <motion.p
          custom={0.3}
          animate={animationControls}
          variants={animationVariants}
        >
          {description}
        </motion.p>
      </Description>
    </Container>
  );
};

export default Game;
