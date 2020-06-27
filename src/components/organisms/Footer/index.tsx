import React from 'react';

import SocialList from '~/components/molecules/SocialList';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <SocialList excluded={['email']} isAnimated={false} />
    <p>
      <a
        href="mailto:enrque.ns@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        enrque.ns@gmail.com
      </a>
    </p>
  </Container>
);

export default React.memo(Footer);
