import React from 'react';

import SocialList from '~/components/molecules/SocialList';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <SocialList excluded={['email']} isAnimated={false} />
    <p>
      <a
        href="mailto:hey@thehenry.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        hey@thehenry.dev
      </a>
    </p>
  </Container>
);

export default React.memo(Footer);
