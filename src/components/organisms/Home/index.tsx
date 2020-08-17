import React from 'react';

import { motion, useTransform, useViewportScroll } from 'framer-motion';

import Profile from '~/components/atoms/Profile';

import SocialList from '~/components/molecules/SocialList';

import { usePageHeight } from '~/hooks/usePageHeight';

import { Container, Divider } from './styles';

const Home: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const pageHeight = usePageHeight();

  /**
   * Controll the opacity by scrollY value
   * if scrollY is 0, opacity is 1
   * if scrollY is >= pageHeight, opacity is 0
   */
  const opacity = useTransform(scrollY, (value) => {
    const scrollValue = Math.min(value, pageHeight);
    const percent = scrollValue / pageHeight || 0;

    return 1 - percent;
  });

  const y = useTransform(scrollY, [0, 1], [0, -0.2], { clamp: false });

  function handleNextSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    event.preventDefault();

    return document.getElementById('education')?.scrollIntoView();
  }

  return (
    <Container id="home">
      <motion.div style={{ opacity, y, width: '100%' }}>
        <Profile />
        <h1>
          {'Henrique '}
          <strong>Miranda</strong>
        </h1>
        <h2>
          {'Telematics student, Full Stack Developer '}
          <strong>&</strong>
          {' Designer'}
        </h2>
        <Divider />
        <SocialList />
      </motion.div>
      <a
        href="#education"
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
};

export default React.memo(Home);
