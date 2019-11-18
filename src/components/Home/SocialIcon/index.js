import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SocialIcon({ link, children }) {
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </Container>
  );
}

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialIcon;
