import React, { useEffect, useRef } from 'react';

import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

import { Container } from './styles';

const variants = {
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hidden: (delay = 0) => ({
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: delay ? 0 : 0.2,
    },
  }),
};

function TimelineItem({ year, title, description }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    function onVisible([{ isIntersecting }]) {
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
        <motion.p custom={0.2} animate={controls} variants={variants}>
          {description}
        </motion.p>
      </div>
    </Container>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimelineItem;
