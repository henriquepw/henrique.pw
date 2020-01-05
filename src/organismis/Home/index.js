import React from 'react';

import PropTypes from 'prop-types';

import SocialList from '~/molecules/SocialList';

import { Container, ProfileImg, Divider } from './styles';

function Home({ forwardRef, pageHeight }) {
  function handleNextSection(e) {
    e.preventDefault();
    document.getElementById('education').scrollIntoView();
  }

  return (
    <Container id="home" ref={forwardRef} height={pageHeight}>
      <ProfileImg />
      <h1>
        Henrique <strong>Miranda</strong>
      </h1>
      <h2>
        Telematics student, Full Stack Developer <strong>&</strong> Designer
      </h2>
      <Divider />
      <SocialList />
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
}

Home.propTypes = {
  pageHeight: PropTypes.number.isRequired,
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Home);
