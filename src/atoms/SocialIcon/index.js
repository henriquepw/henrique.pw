import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

function SocialIcon({ link, children, alt }) {
  return (
    <Container
      href={link}
      alt={alt}
      aria-label={alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Container>
  );
}

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialIcon;
