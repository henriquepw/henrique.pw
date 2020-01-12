import React, { useEffect, useRef } from 'react';

import { useAnimation, motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import PropTypes from 'prop-types';

import { Container, Image, Description } from './styles';

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
      delay: delay ? 0 : 0.3,
    },
  }),
};

function Game({ name, description, fluid }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    function onVisible([{ isIntersecting }]) {
      controls.start(isIntersecting ? 'visible' : 'hidden');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: `0px 0px -30% 0px`,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, ref]);

  return (
    <Container ref={ref}>
      <Image fluid={fluid} />
      <Description>
        <motion.h1 animate={controls} variants={variants}>
          {name}
        </motion.h1>
        <motion.p custom={0.3} animate={controls} variants={variants}>
          {description}
        </motion.p>
      </Description>
    </Container>
  );
}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluid: PropTypes.shape(FluidObject).isRequired,
};

export default Game;
