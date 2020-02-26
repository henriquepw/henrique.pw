import React, { useEffect, useRef, FC } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { Container } from './styles';

const variants = {
  visible: (delay = 0.2) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hidden: (delay: number) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: delay ? 0.2 : 0.4,
    },
  }),
};

interface Props {
  year: number;
  title: string;
  description: string;
}

const TimelineItem: FC<Props> = ({ year, title, description }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onVisible([{ isIntersecting }]: IntersectionObserverEntry[]) {
      controls.start(isIntersecting ? 'visible' : 'hidden');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: '10% 0px -5% 0px',
      threshold: 1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container ref={ref}>
      <h2>{year}</h2>
      <span />
      <div>
        <motion.h1 animate={controls} variants={variants}>
          {title}
        </motion.h1>
        <motion.p custom={0.4} animate={controls} variants={variants}>
          {description}
        </motion.p>
      </div>
    </Container>
  );
};

export default TimelineItem;
