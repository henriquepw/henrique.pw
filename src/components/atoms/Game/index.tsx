import React, { useEffect, useRef } from 'react';

import { useAnimation, motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';

import { Container, Image, Description } from './styles';

const animationVariants = {
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hidden: (delay: 0 | 0.3 = 0) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 - delay, // the inverse of the visible delay
    },
  }),
};

interface GameProps {
  name: string;
  description: string;
  fluid: FluidObject | FluidObject[];
}

const Game: React.FC<GameProps> = ({ name, description, fluid }) => {
  const animationControls = useAnimation();
  const ref = useRef<HTMLLIElement>(null);

  /**
   * Controlling the visibility of the element using an intersection observer
   */
  useEffect(() => {
    function onVisible([elem]: IntersectionObserverEntry[]): void {
      animationControls.start(elem.isIntersecting ? 'visible' : 'hidden');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: '0px 0px -30% 0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animationControls, ref]);

  return (
    <Container ref={ref}>
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
