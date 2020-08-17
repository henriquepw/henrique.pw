import React, { useEffect, useRef } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { Container } from './styles';

const variants = {
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
  const animationControls = useAnimation();
  const ref = useRef<HTMLLIElement>(null);

  /**
   * Controlling the visibility of the element using an intersection observer
   */
  useEffect(() => {
    function onVisible([elem]: IntersectionObserverEntry[]): void {
      animationControls.start(elem.isIntersecting ? 'show' : 'hide');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: '10% 0px -5% 0px',
      threshold: 1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animationControls]);

  return (
    <Container ref={ref}>
      <h2>{year}</h2>
      <span />
      <div>
        <motion.h1 animate={animationControls} variants={variants}>
          {title}
        </motion.h1>
        <motion.p custom={0.4} animate={animationControls} variants={variants}>
          {description}
        </motion.p>
      </div>
    </Container>
  );
};

export default TimelineItem;
