import React from 'react';

import PageTitle from '~/atoms/PageTitle';

import { Container } from './styles';

function Projects({ forwardRef }) {
  return (
    <Container id="projects" ref={forwardRef}>
      <PageTitle title="Projects" />
    </Container>
  );
}

export default Projects;
