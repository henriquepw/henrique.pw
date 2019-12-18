import React from 'react';

import PageTitle from '~/atoms/PageTitle';
import Timeline from '~/molecules/Timeline';

import { Container } from './styles';

function Education() {
  return (
    <Container id="education">
      <PageTitle title="Education" />
      <Timeline />
    </Container>
  );
}

export default Education;
