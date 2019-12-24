import React from 'react';

import PageTitle from '~/atoms/PageTitle';

import Timeline from '~/molecules/Timeline';

import { Container } from './styles';

function Education({ forwardRef }) {
  return (
    <Container id="education" ref={forwardRef}>
      <PageTitle title="Education" />
      <Timeline />
    </Container>
  );
}

export default Education;
