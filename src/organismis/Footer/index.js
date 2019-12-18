import React from 'react';

import SocialList from '~/molecules/SocialList';

import { Container } from './styles';

export default function footer() {
  return (
    <Container>
      <SocialList excluded={['email']} />
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
}
