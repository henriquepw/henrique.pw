import React from 'react';

import photo from '~/assets/images/photo.png';
import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <div>
        <img src={photo} alt="Henrique Miranda" />
      </div>
      <ul>
        <li>Home</li>
        <li>Education</li>
        <li>Projects</li>
        <li>About me</li>
      </ul>
    </Container>
  );
}
