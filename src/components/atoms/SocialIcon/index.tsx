import React from 'react';

import { Container } from './styles';

interface SocialIconProps {
  link: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, children, alt }) => (
  <Container
    href={link}
    aria-label={alt}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Container>
);

export default SocialIcon;
