import React, { useContext, forwardRef } from 'react';

import { motion, useTransform } from 'framer-motion';

import SocialList from '~/molecules/SocialList';

import SectionsContext from '~/context/SectionsContext';

import { Container, ProfileImg, Divider } from './styles';

const Home = forwardRef((_, ref) => {
  const { scrollY, pageHeight } = useContext(SectionsContext);

  const opacity = useTransform(scrollY, [0, pageHeight], [1, 0]);
  const y = useTransform(scrollY, [0, 1], [0, -0.2], {
    clamp: false,
  });

  function handleNextSection(e) {
    e.preventDefault();
    document.getElementById('education').scrollIntoView();
  }

  return (
    <Container id="home" ref={ref}>
      <motion.div style={{ opacity, y, width: '100%' }}>
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
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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

export default React.memo(Home);
