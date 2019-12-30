import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import PropTypes from 'prop-types';

import SocialList from '~/molecules/SocialList';

import { Container, ProfileImg, Divider } from './styles';

function Home({ forwardRef }) {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function setCurrentHeight() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => {
      window.removeEventListener('resize', setCurrentHeight);
    };
  }, [height]);

  return (
    <Container id="home" ref={forwardRef} height={height}>
      <ProfileImg />
      <h1>
        Henrique <strong>Miranda</strong>
      </h1>
      <h2>
        Telematics student, Full Stack Developer <strong>&</strong> Designer
      </h2>
      <Divider />
      <SocialList />
      <a href="#education" alt="next section" aria-label="next section">
        <FiChevronDown size={80} />
        <FiChevronDown size={80} />
        <FiChevronDown size={80} />
      </a>
    </Container>
  );
}

Home.propTypes = {
  forwardRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
};

export default React.memo(Home);
