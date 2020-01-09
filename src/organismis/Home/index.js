import React, { useEffect, forwardRef } from 'react';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

import SocialList from '~/molecules/SocialList';

import { Container, ProfileImg, Divider } from './styles';

const threshold = Array.from(new Array(50), (_, index) => (index + 1) / 50);

const Home = forwardRef(({ pageHeight }, ref) => {
  const opacity = useMotionValue(1);
  const contentY = useTransform(opacity, value => -((1 / value - 1) * 80));

  function handleNextSection(e) {
    e.preventDefault();
    document.getElementById('education').scrollIntoView();
  }

  useEffect(() => {
    function parallaxContent([{ intersectionRatio }]) {
      opacity.set(intersectionRatio >= 0.9 ? 1 : intersectionRatio);
    }

    const observer = new IntersectionObserver(parallaxContent, {
      threshold,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [opacity, pageHeight, contentY, ref]);

  return (
    <Container id="home" ref={ref} /*  height={pageHeight} */>
      <motion.div style={{ opacity, y: contentY, width: '100%' }}>
        <ProfileImg />
        <h1>
          Henrique <strong>Miranda</strong>
        </h1>
        <h2>
          Telematics student, Full Stack Developer <strong>&</strong> Designer
        </h2>
        <Divider />
        <SocialList />
      </motion.div>
      <a
        href="#education"
        alt="next section"
        aria-label="next section"
        onClick={handleNextSection}
      >
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 4 12 10 18 4" />
          <polyline points="6 9 12 15 18 9" />
          <polyline points="6 14 12 20 18 14" />
        </svg>
      </a>
    </Container>
  );
});

Home.propTypes = {
  pageHeight: PropTypes.number.isRequired,
};

export default React.memo(Home);
