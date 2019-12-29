import React, { useEffect, useState } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiChevronDown,
} from 'react-icons/fi';

import PropTypes from 'prop-types';

import SocialIcon from '~/atoms/SocialIcon';

import { Container, ProfileImg, Divider } from './styles';

const icons = [
  ['https://github.com/henry-ns', 'Meu perfil do github', <FiGithub />],
  [
    'https://www.linkedin.com/in/henry-ns/',
    'Meu perfil do linkedin',
    <FiLinkedin />,
  ],
  [
    'https://instagram.com/_henry_ns',
    'Meu perfil do instagram',
    <FiInstagram />,
  ],
  ['https://twitter.com/_henry_ns', 'Meu perfil do twitter', <FiTwitter />],
  ['mailto:enrque.ns@gmail.com', 'Meu e-mail para contatos', <FiMail />],
];

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
      <ul>
        {icons.map(item => (
          <li key={item[0]}>
            <SocialIcon link={item[0]} title={item[1]}>
              {item[2]}
            </SocialIcon>
          </li>
        ))}
      </ul>
      <a href="#education" alt="next section: education">
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
