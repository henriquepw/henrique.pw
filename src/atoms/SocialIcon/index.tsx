import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  link: string;
  alt: string;
}

const SocialIcon: FC<Props> = ({ link, children, alt }) => (
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
