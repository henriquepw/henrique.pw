import React, { useContext, useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

import SectionsContext from '~/context/sectionsContext';

import { Container } from './styles';

const variants = {
  visible: delay => ({
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

function Title({ children, animateDelay }) {
  const { selected } = useContext(SectionsContext);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(selected === children.toLowerCase() ? 'visible' : 'hidden');
  }, [controls, selected, children]);

  return (
    <Container custom={animateDelay} animate={controls} variants={variants}>
      {children}
    </Container>
  );
}

Title.defaultProps = {
  animateDelay: 0.2,
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  animateDelay: PropTypes.number,
};

export default Title;
