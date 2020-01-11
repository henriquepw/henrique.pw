import React, { useContext, useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

import SectionsContext from '~/context/sectionsContext';

import { Container } from './styles';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    y: 30,
    opacity: 0,
  },
};

function PageTitle({ title }) {
  const { selected } = useContext(SectionsContext);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(selected === title.toLowerCase() ? 'visible' : 'hidden');
  }, [controls, selected, title]);

  return (
    <Container animate={controls} variants={variants}>
      {title}
    </Container>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
