import React from 'react';

import { motion } from 'framer-motion';

import useAnimationRef from '~/hooks/useAnimationRef';

import { Container } from './styles';

const animationVariants = {
  show: (delay = 0.2) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hide: (delay: 0.2 | 0.4 = 0.2) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.6 - delay, // the inverse of the show delay
    },
  }),
};

interface TimelineItemProps {
  year: number;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
}) => {
  const [animationControls, ref] = useAnimationRef({
    rootMargin: '10% 0px -5% 0px',
    threshold: 1,
  });

  return (
    <Container ref={ref}>
      <h2>{year}</h2>
      <span />
      <div>
        <motion.h1 animate={animationControls} variants={animationVariants}>
          {title}
        </motion.h1>
        <motion.p
          custom={0.4}
          animate={animationControls}
          variants={animationVariants}
        >
          {description}
        </motion.p>
      </div>
    </Container>
  );
};

export default TimelineItem;
