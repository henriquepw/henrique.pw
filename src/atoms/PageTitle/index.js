import React, { useEffect, useRef } from 'react';

import { useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

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
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    function onVisible([{ isIntersecting }]) {
      controls.start(isIntersecting ? 'visible' : 'hidden');
    }

    const observer = new IntersectionObserver(onVisible, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container animate={controls} variants={variants} ref={ref}>
      {title}
    </Container>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
