import React from 'react';

import PropTypes from 'prop-types';

import PageTitle from '~/atoms/PageTitle';

import { Container } from './styles';

function Projects({ forwardRef }) {
  return (
    <Container id="projects" ref={forwardRef}>
      <PageTitle title="Projects" />
    </Container>
  );
}

Projects.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default Projects;
